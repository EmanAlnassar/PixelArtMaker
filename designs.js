// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const table = document.getElementById('pixelCanvas');
     // Getting the values of hight and width from user inputs
    const hight = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    // Creating the grid which is composed of rows filled with cells
    for (let i = 0; i < hight; i++) {
        const row = table.insertRow(i);
        for (let x = 0; x < width; x++) {
            row.insertCell(x);
        }
    }
};

// An event to respond when the user submits the form to make the grid
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    makeGrid();
});

// An event to apply the picked color to the chosen cell via a click
const table = document.getElementById('pixelCanvas');
table.addEventListener('click', function (evt) {
    if (evt.target.nodeName.toLowerCase() === 'td') {
        const color = document.getElementById('colorPicker').value;
        evt.target.style.backgroundColor = color;
    }
});