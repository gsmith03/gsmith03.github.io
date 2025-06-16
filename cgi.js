document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('sameBillingInfo').addEventListener('change', checkCheckbox);
});

function checkCheckbox() {
    let checkbox = document.getElementById('sameBillingInfo');
    let shipUser = document.getElementById('ship_name');
    let shipZip = document.getElementById('ship_zip');
    let billUser = document.getElementById('billing_name');
    let billZip = document.getElementById('billing_zip');

    if (checkbox.checked) {
        billUser.value = shipUser.value;
        billZip.value = shipZip.value;
    }
    else {
        billUser.value = "";
        billZip.value = "";
    }
}