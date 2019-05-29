// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const table = document.getElementById('pixelCanvas');
    const hight = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    for (let i = 0; i < hight; i++) {
        const row = table.insertRow(i);
        for (let x = 0; x < width; x++) {
            row.insertCell(x);
        }
    }
};


const form = document.getElementById('sizePicker');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    makeGrid();
});


const table = document.getElementById('pixelCanvas');
table.addEventListener('click', function (evt) {
    if (evt.target.nodeName.toLowerCase() === 'td') {
        const color = document.getElementById('colorPicker').value;
        evt.target.style.backgroundColor = color;
    }
});