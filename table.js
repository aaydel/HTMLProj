const body = document.querySelector("body");

const table = document.createElement('table')
table.style.border = "1px solid red";
table.style.borderCollapse = "collapse";
table.style.width = "80%";

const data = [
    {
        "title": "Abc",
        "quantity": "25",
        "author": "Das"
    }, {
        "title": "Kbc",
        "quantity": "43",
        "author": "Khan"
    }, {
        "title": "Kbc",
        "quantity": "43",
        "author": "Goel"
    }];


addHeaderRow();
createDataRows();

body.appendChild(table)

createButton();

function addHeaderRow() {
    const headerRow = document.createElement('tr')

    const headerCol1 = document.createElement('th')
    headerCol1.innerHTML = "TITLE"
    headerCol1.style.border = "1px solid red"
    headerCol1.style.backgroundColor = "yellow"

    const headerCol2 = document.createElement('th')
    headerCol2.innerHTML = "QUANTITY"
    headerCol2.style.border = "1px solid red"
    headerCol2.style.backgroundColor = "yellow"

    const headerCol3 = document.createElement('th')
    headerCol3.innerHTML = "AUTHOR"
    headerCol3.style.border = "1px solid red"
    headerCol3.style.backgroundColor = "yellow"

    headerRow.appendChild(headerCol1);
    headerRow.appendChild(headerCol2);
    headerRow.appendChild(headerCol3);

    table.appendChild(headerRow);
}

function createDataRows() {

    for (emp of data) {
        const dataRow = document.createElement('tr')
        dataRow.className = 'dataRow';

        const col1 = document.createElement('td')
        col1.innerHTML = emp.title;
        col1.style.border = "1px solid red"

        const col2 = document.createElement('td')
        col2.innerHTML = emp.quantity;
        col2.style.border = "1px solid red"

        const col3 = document.createElement('td')
        col3.innerHTML = emp.author;
        col3.style.border = "1px solid red"

        dataRow.appendChild(col1);
        dataRow.appendChild(col2);
        dataRow.appendChild(col3);

        table.appendChild(dataRow);
    }

}

function createButton() {

    const btn = document.createElement('button');
    btn.innerHTML = 'Add New Book';

    btn.onclick = addRow;

    body.appendChild(document.createElement('br'))
    body.appendChild(btn)
}

function addRow() {
    const obj = {
        "title": "NewBook",
        "quantity": "40",
        "author": "Sharma"
    }

    clearAllDataRows();
    data.push(obj);
    createDataRows();

}

function clearAllDataRows() {
    const allRows = table.querySelectorAll('.dataRow');
    for (row of allRows) {
        table.removeChild(row);
    }
}