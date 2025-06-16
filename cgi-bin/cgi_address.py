#!/usr/local/bin/python3.12
# PATH TO LOCAL PYTHON EXECUTABLE

# Assignment 5 - CS4720
# cgi_address.py


import cgi
import os

print("Content-type: text/html\r\n\r\n")

form = cgi.FieldStorage()

shipName = str(form.getvalue('ship_name', ''))
shipZip = str(form.getvalue('ship_zip',''))
billName = str(form.getvalue('billing_name',''))
billZip = str(form.getvalue('billing_zip',''))

# default values for billing fields if empty
if not billName:
        billName = "None"
if not billZip:
        billZip = "None"

with open("/home/gsmithhi/html/cgi-bin/shippinginfo.txt", "w") as f:
        f.write(f"Shipping Name: {shipName}     --     Shipping Zip: {shipZip} \n")
        f.write(f"Billing Name: {billName} -- Billing Zip: {billZip} \n")


print("<html>")
print("<head>")
print("<title>Shipping Information</title>")
print('<link rel="stylesheet" type="text/css" href="../bitnami.css">')

print("</head>")
print("<body>")
print("<br />")
print(f"<div class='info'><p>Shipping Name: <strong>{shipName}</strong> -- Shipping Zip: <strong>{shipZip}</strong></p></div>")
print(f"<div class='info'><p>Billing Name: <strong>{billName}</strong> -- Billing Zip: <strong>{billZip}</strong> </p></div><br/>")

print("<div class='info'><p>Information written to shippinginfo.txt</p></div>")
print("</body>")
print("</html>")
