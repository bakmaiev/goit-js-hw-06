const inputEl = document.querySelector('#validation-input');
const validValue = inputEl.dataset.length; 
const handleInput = (e) => {
    e.currentTarget.classList.remove('valid', 'invalid');
    e.currentTarget.value.length === Number(validValue)
    ? e.currentTarget.classList.add('valid')
    : e.currentTarget.classList.add('invalid');
    
    // TOGGLE METHOD
    // e.currentTarget.classList.toggle('valid', e.currentTarget.value.length === Number(validValue));
    // e.currentTarget.classList.toggle('invalid', e.currentTarget.value.length !== Number(validValue));
};

inputEl.addEventListener('blur', handleInput)