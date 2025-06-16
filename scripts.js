function squareNumber(number) {
    const num = document.getElementById("numberInput").value;
    let square = num * num;
    console.log("The square of " + num + " is " + square)

    document.getElementById('squared').innerText = `The square of ${num} is ${square}`;

    return square;
}

function fixStart(phrase) {
    const phrases = document.getElementById("letters").value;
    let firstChar = phrases[0];
    let newPhrase = firstChar;
    for(let i = 1; i < phrases.length; i++) {
        if(phrases[i] === firstChar) {
            newPhrase += '*';
        }
        else {
            newPhrase += phrases[i];
        }
    }
    console.log(newPhrase);
    document.getElementById('repeat').innerText = `${newPhrase}`;
    return newPhrase;
}

function notBad(sentence) {
    const sentences = document.getElementById("checker").value;
    // set the target words
    const word1 = "not";
    const word2 = "bad";

    // check to see if the string contains a word
    // find the position of 'not' and 'bad'
    const notIndex = sentences.indexOf(word1);
    const badIndex = sentences.indexOf(word2);

    // -1 means index not found  -----  ensures that 'not' comes before 'bad'
    if (notIndex !== -1 && badIndex !== -1 && notIndex < badIndex) {
        //slices sentence starting at 'not' and replaces with 'good'.
        let newSentence = sentences.slice(0, notIndex) + "good" + sentences.slice(badIndex, word2.length);
        console.log(newSentence); //print new sentence
        document.getElementById('notbad').innerText = `${newSentence}`;
    }
    else {
        console.log(sentences); // no changes made. print original sentence
        document.getElementById('notbad').innerText = `${sentences}`;
    }

    return sentences;
}

const values = {};

// Function to add a new cell with an input field
function addCell() {
    console.log("Add Cell button clicked"); // Debugging line
    const tableBody = document.getElementById('inputTable');
    const newRow = document.createElement('tr'); // Create table row

    // Create cell for row number
    const numberCell = document.createElement('td');
    numberCell.innerText = (tableBody.rows.length + 1).toString(); // Number the row

    // Create cell for input
    const inputCell = document.createElement('td');
    const newInput = document.createElement('input'); // Create new input
    newInput.type = 'text';

    const index = tableBody.rows.length;
    if (values[index]) {
        newInput.value = values[index];
    }

    // Create cell for displaying length
    const lengthCell = document.createElement('td');
    lengthCell.innerText = newInput.value.length.toString(); // Convert number to string

    newInput.addEventListener('input', () => {
        lengthCell.innerText = newInput.value.length.toString(); // Convert number to string
        values[index] = newInput.value; // Update saved value
    });

    inputCell.appendChild(newInput); // Append input to the cell
    console.log("Input cell content:", inputCell.innerHTML); // Debugging line

    newRow.appendChild(numberCell); // Append number cell to the row
    newRow.appendChild(inputCell); // Append input cell to the row
    newRow.appendChild(lengthCell); // Append length cell to the row

    tableBody.appendChild(newRow); // Append the new row to the table body

    // Update row numbers
    updateRowNumbers();
}

// Function to remove the last cell with an input field
function removeCell() {
    console.log("Remove Cell button clicked"); // Debugging line
    const tableBody = document.getElementById('inputTable');
    const rowCount = tableBody.rows.length;
    if (rowCount > 0) {
        const lastRow = tableBody.rows[rowCount - 1];
        const inputElement = lastRow.cells[1].querySelector('input');
        values[rowCount - 1] = inputElement.value; // Save the value
        tableBody.deleteRow(rowCount - 1);

        // Update row numbers
        updateRowNumbers();
    }
}

// Function to sort the input fields
function sortCells() {
    console.log("Sort button clicked"); // Debugging line
    const tableBody = document.getElementById('inputTable');
    const rows = Array.from(tableBody.rows).filter(row => row.style.display !== 'none');

    rows.sort((row1, row2) => {
        const input1 = row1.cells[1].querySelector('input').value.toLowerCase();
        const input2 = row2.cells[1].querySelector('input').value.toLowerCase();
        return input1.localeCompare(input2);
    });

    rows.forEach(row => tableBody.appendChild(row));

    // Update row numbers
    updateRowNumbers();
}

// Function to update row numbers
function updateRowNumbers() {
    const tableBody = document.getElementById('inputTable');
    Array.from(tableBody.rows).forEach((row, index) => {
        row.cells[0].innerText = (index + 1).toString();
    });
}

// Initialize event listeners for existing inputs on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed"); // Debugging line
    document.querySelectorAll('#inputTable input').forEach((input, index) => {
        const cellLength = input.parentElement.nextElementSibling;
        if (cellLength) {
            input.addEventListener('input', () => {
                cellLength.innerText = input.value.length.toString(); // Convert number to string
                values[index] = input.value;
            });
        }
    });

    // Update row numbers on page load
    updateRowNumbers();
});
