const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const handleInput = (e) => {
    if (inputEl.value === "") return outputEl.textContent = "Anonymous";
    outputEl.textContent = e.currentTarget.value;
}

inputEl.addEventListener('input', handleInput)
