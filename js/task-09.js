function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

const handleBtn = (e) => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  textEl.textContent = `${getRandomHexColor()}`
};


btnEl.addEventListener('click', handleBtn);