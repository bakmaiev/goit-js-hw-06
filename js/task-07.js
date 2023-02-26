const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const handleInput = (e) => {
    textEl.style.fontSize = `${e.target.value}px`; 
};
 
inputEl.addEventListener('input', handleInput);