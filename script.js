const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('form');
const resetBtn = document.querySelector('.erase-btn');
const axis = {
  x: null,
  y: null
}
const reset = () => {
  wrapper.innerHTML = ``;
}

const setWrapperGrid = (x, y) => {
  wrapper.style.display = `grid`;
  wrapper.style.gridTemplateColumns = `repeat(${x},1fr)`;
  wrapper.style.gridRows = `repeat(${y},1fr)`;
  wrapper.style.height = `82vh`;
  wrapper.style.cursor = `pointer`;
}

const insertHTML = quantity => {
  for (let i = 0; i < quantity; i++) {
    wrapper.insertAdjacentHTML("beforeend", `<div class="box box-${i+1}"></div>`);
  }
}

const setBoxListener = () => {
  const boxesNodeList = document.querySelectorAll('.box');
  const boxes = [...boxesNodeList];
  boxes.forEach(box => box.addEventListener('mouseenter', e => {
    
    const currentBox = e.target;
    currentBox.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  }))
}

const getRandomNumber = () => Math.floor(Math.random() * 255) + 1;

form.addEventListener('submit', e => {
  e.preventDefault();
  reset();
  let {
    x,
    y
  } = axis;
  x = form.axisx.value;
  y = form.axisy.value;
  setWrapperGrid(x, y);
  insertHTML(x * y);
  setBoxListener();
  
})

resetBtn.addEventListener('click', () => {
  reset();
});