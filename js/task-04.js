let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const handleDecrementClick = (e) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', handleDecrementClick);

const handleIncrementClick = (e) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', handleIncrementClick);