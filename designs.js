// Variables
const colorPickerJs = document.getElementById('colorPicker');
const submitButton = document.querySelector('input[type=submit]');
const tableCanvas = document.getElementById('pixel_canvas');

let colorPicked = '#000';
let tableRow = 0,
    tableCell = 0;

// Select color input
colorPickerJs.addEventListener('change', function(){
    colorPicked = colorPickerJs.value;
    document.querySelector('h1').style.color = colorPicked;
})

// Select size input
submitButton.addEventListener('click', function(e){
    let inputHeight = document.getElementById('input_height').value;
    let inputWidth = document.getElementById('input_width').value;
    //Clear table on new submit
    while (tableCanvas.firstChild){
        tableCanvas.removeChild(tableCanvas.firstChild);
    }
    
    makeGrid(inputHeight, inputWidth);
    e.preventDefault();
})

// When size is submitted by the user, call makeGrid()
function makeGrid(inputHeight, inputWidth) {
    for (let i = 0; i < inputHeight; i++) {
        tableRow = tableCanvas.insertRow(i);
        for (let j = 0; j < inputWidth; j++){
            tableCell = tableRow.insertCell(j);
        }
    }
}

// Change table cells background color
tableCanvas.addEventListener('click', function(){
    event.target.style.backgroundColor = colorPicked;
})

tableCanvas.addEventListener('dblclick', function(){
    event.target.removeAttribute('style');
})