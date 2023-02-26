const inputEl = document.querySelector('#validation-input');
const validValue = inputEl.dataset.length; 
const handleInput = (e) => {
    e.target.classList.remove('valid', 'invalid');
    e.target.value.length === Number(validValue)
    ? e.target.classList.add('valid')
    : e.target.classList.add('invalid');
    
    // TOGGLE METHOD
    // e.target.classList.toggle('valid', e.target.value.length === Number(validValue));
    // e.target.classList.toggle('invalid', e.target.value.length !== Number(validValue));
};

inputEl.addEventListener('blur', handleInput)