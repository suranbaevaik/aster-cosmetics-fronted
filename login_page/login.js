const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const errorText = document.querySelector('.error-text');

let formData = {};

emailInput.addEventListener('input', e => {
    formData.email = e.target.value;
})

passwordInput.addEventListener('input', e => {
    formData.password = e.target.value;
})

loginBtn.addEventListener('click', () => {
    fetch('http://localhost:5001/login', {
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
           emailInput.value = '';
           passwordInput.value = '';
           formData = {};
           errorText.textContent = '';
           localStorage.setItem('user', JSON.stringify(data.email));
           window.location.href = './mainPage.html';
        })
        .catch((error) => {
            if (error.message) {
                errorText.textContent = error.message;
            }
            console.log(error);
        })
})