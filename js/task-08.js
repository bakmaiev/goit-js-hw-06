const formEl = document.querySelector('.login-form');

const handleForm = (e) => {
    e.preventDefault();

    const { elements: { email, password } } = e.currentTarget;
    if (email.value === "" || password.value === "") alert("Всі поля мають бути заповнені. Спробуй ще раз, ти зможеш!");
    else {
        const dataForm = {
            Email: email.value,
            Password: password.value
        }

        console.log(dataForm);
        e.currentTarget.reset();
    }
};

formEl.addEventListener('submit', handleForm);
