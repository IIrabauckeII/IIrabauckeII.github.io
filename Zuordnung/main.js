// make items dragable

const items = document.querySelectorAll('.word');
const leftContainer = document.getElementById('leftField');
const rightContainer = document.getElementById('rightField');

function onDragStart(event) {
  console.log(event);
  event.dataTransfer.setData('text/plain', event.target.id);
  const id = event.dataTransfer.getData('text');
  console.log(id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event, element) {
  const id = event.dataTransfer.getData('text');
  console.log(id);

  const draggableElement = document.getElementById(id);
  console.log(draggableElement);
  draggableElement.style["background-color"] = "#FFF0DB";

  element.appendChild(draggableElement);

  event.dataTransfer.clearData();
}

// set width of items = width of original items
// let windowWidth = window.innerWidth;
// let item1 = document.getElementById('word1');
// let fontSize = window.getComputedStyle(item1, null).getPropertyValue('font-size');
// let itemWidth = (windowWidth - 6*16)/6;
// console.log(itemWidth)
// console.log(window.getComputedStyle(item1, null).getPropertyValue('width'))
