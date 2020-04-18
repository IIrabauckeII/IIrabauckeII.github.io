// global variable declaration
const containerDiv = document.getElementById('container');
const btnClear = document.getElementById('btnClear');
const btnNewGrid = document.getElementById('btnNewGrid');
const btnPickColor = document.getElementById('btnPickColor');
const inputPickColor = document.getElementById('inputPickColor');
const btnRandomColor = document.getElementById('btnRandomColor');
let hoverColor = '#FFFFFF';
let randomizeColors = false;


// function setup: create Divs
let createDivs = (numberOfRows) => {
  for (i=0; i<(numberOfRows*numberOfRows); i++) {
    let createDiv = document.createElement('div');
    let newDiv = containerDiv.appendChild(createDiv);
    newDiv.classList.add('subDiv');
  }
  containerDiv.style['grid-template-columns'] = `repeat(${numberOfRows}, 1fr)`
}

//function setup: delete Divs
function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// create Divs
createDivs(16);

// eventListener hover
const colorChildDivOnHover = (event) => {
  if (event.target.className == "subDiv" && randomizeColors == true) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style['background-color'] = '#' + randomColor;
    return
  }
  if (event.target.className == "subDiv") {
  event.target.style['background-color'] = hoverColor;
  }
};

containerDiv.addEventListener('mouseover', colorChildDivOnHover)

//addEventListener clearGrid
const subDivs = document.querySelectorAll('.subDiv');

const clearGrid = () => {
  for (let i=0; i<subDivs.length; i++) {
    subDivs[i].style['background-color'] = "#202020";
  }
};

btnClear.addEventListener('click', clearGrid);

//eventListener newGrid
const rowNrInput = () => {
  let rowNr = window.prompt('How many rows should the new grid have?', 'Initial Value: 16');
  if (Number.isInteger(Number(rowNr)) && rowNr > 0 && rowNr <= 128) {
    removeElementsByClass('subDiv');
    createDivs(rowNr);
  } else {
    alert("Please enter an integer above zero.")
  }
}

btnNewGrid.addEventListener('click', rowNrInput);

//eventListener open color picker
const openColorPicker = () => {
  inputPickColor.click();
}

btnPickColor.addEventListener('click', openColorPicker)


//eventListener change color through color picker
const changeColor = () => {
  hoverColor = inputPickColor.value;
  randomizeColors = false;
}

inputPickColor.addEventListener('change', changeColor)


//eventListener randomize Colors
const randomizeColorOnHover = () => {
  randomizeColors = true;
}

btnRandomColor.addEventListener('click', randomizeColorOnHover)
