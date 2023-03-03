const form = document.querySelector('.form-signup');
const checkPassword = (e) => {
    const password = document.querySelector('#password').value;
    const confirm = document.querySelector('#confirm').value;
    if (password !== confirm) {
        alert('Passwords do not match');
        e.preventDefault();
    } else {
        alert('SUCCESS!');
    }
};

form.addEventListener('submit', checkPassword);
