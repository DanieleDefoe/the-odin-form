const form = document.querySelector('.form-signup');
const submitBtn = form.querySelector('.form__submit');
const inputs = Array.from(form.querySelectorAll('input'));

const validate = () => {
    const password = form.querySelector('#password').value;
    const confirm = form.querySelector('#confirm').value;
    if (password === confirm && inputs.every(input => input.checkValidity())) {
        submitBtn.removeAttribute('disabled');
    } else if (!submitBtn.hasAttribute('disabled')) {
        submitBtn.setAttribute('disabled', true);
    }
};

form.addEventListener('keyup', validate);
