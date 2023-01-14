const nameInput = document.querySelector('#nameReg');
const ageInput = document.querySelector('#ageReg');
const emailInput = document.querySelector('#emailReg');
const passwordInput = document.querySelector('#pwd');
const registerBtn = document.querySelector('#register-btn');
const errorText = document.querySelector('.err-text');

let formData = {};

nameInput.addEventListener('input', e => {
    formData.name = e.target.value;
})

ageInput.addEventListener('input', e => {
    formData.age = e.target.value;
})

emailInput.addEventListener('input', e => {
    formData.email = e.target.value;
})

passwordInput.addEventListener('input', e => {
    formData.password = e.target.value;
})

registerBtn.addEventListener('click', () => {
    fetch('http://localhost:5001/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(async (res) => {
            const data = await res.json();
            if (res.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        })
        .then((data) => {
            nameInput.value = '';
            ageInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            formData = {};
            errorText.textContent = '';
            window.location.href = './mainPage.html';
        })
        .catch((error) => {
            if (error.message) {
                errorText.textContent = error.message;
            }
            console.log(error);
        })
})