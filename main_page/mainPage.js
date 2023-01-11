/*const h1 = document.getElementsByTagName('h1');
console.log(h1)

const logo = document.getElementById('logo');

logo.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
console.log(logo);*/

/*const btn = document.createElement('button');
const homeElement = document.querySelector('.products-container');
homeElement.append(btn);
btn.textContent = 'knopka'

homeElement.insertAdjacentElement('afterend', btn);

btn.classList.add('btn-shop', 'buy-all-btn');
btn.classList.remove('buy-all-btn');

const checkClass = btn.classList.contains('btn-shop');
console.log(checkClass)

btn.setAttribute('type', 'submit');*/


/*const addElement = confirm('Хотите добавить элемент?');
const el = document.querySelector('body');

if (addElement) {
    const img = document.createElement('img');
    img.setAttribute('src', 'https://exoplanets.nasa.gov/internal_resources/1806');
    img.classList.add('main-image');
    img.style.marginTop = '20px';

    el.append(img);
} else {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://google.com');
    link.setAttribute('target', '_blank');
    link.classList.add('main-link');
    link.style.marginTop = '20px';
    link.style.textDecoration = 'none';
    link.textContent = 'GOOGLE';

    el.append(link);
}*/

/*const btn = document.querySelector('.btn-shop');
let counter = 0;

btn.addEventListener('click', () => {
    counter++;
    alert(counter);
})*/

const btn = document.querySelector('.btn-shop');
btn.addEventListener('click', () => {
    //GET
    /*fetch('http://localhost:5001/users')
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
        })*/

    //DELETE
   /* fetch('http://localhost:5001/users/6', {
        method: 'DELETE'

    })
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
        })*/

    //PATCH POST
    const data = {
        email: "aibiike@gmail.com",
        password: "asdfgh12345",
        age: 10,
        name: "Aibiike"
    }

    fetch('http://localhost:5001/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            const p = document.createElement('p');
            p.textContent = data.message;

            document.querySelector('.banner-box').append(p);
        })
})



