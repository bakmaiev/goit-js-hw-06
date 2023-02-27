function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]')
const btnCreateEl = document.querySelector('[data-create]')
const btnDestroyEl = document.querySelector('[data-destroy]')
const boxesEl = document.querySelector('#boxes');
boxesEl.style.cssText = "display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 30px;"

btnCreateEl.addEventListener('click', handleCreateBoxes);
btnDestroyEl.addEventListener('click', handleDestroyBoxes);

function handleCreateBoxes() {
  createBoxes(inputEl.value);
};

function handleDestroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
};

function createBoxes(amount) {
  if (amount < 1 || amount > 100 || amount === '') alert('Введіть число від 1 до 100');
  else {
    handleDestroyBoxes();
  let defaultSize = 30;
  let divArray = [];
  for (let i = 0; i < amount; i += 1) {
    defaultSize += 10;
    let randomBox = document.createElement('div');
    randomBox.style.cssText = `background-color: ${getRandomHexColor()}; width: ${defaultSize}px; height: ${defaultSize}px;`
    divArray.push(randomBox);
  }
  boxesEl.append(...divArray);
  }
}