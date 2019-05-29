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

