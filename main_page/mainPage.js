const container = document.querySelector('#products-container');

fetch('http://localhost:5001/products')
    .then((res) =>  res.json())
    .then((data) => {
        data.forEach(item => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            container.append(productCard);

            const productImgBox = document.createElement('div');
            productImgBox.classList.add('product-img');
            productCard.append(productImgBox);

            const productImg = document.createElement('img');
            productImg.setAttribute('src', item.image);
            productImgBox.append(productImg);
            const modalWindow = document.createElement('div');
            modalWindow.classList.add('cart-btn-box');
            productImgBox.append(modalWindow);
            const modalWindowBtn = document.createElement('button');
            modalWindowBtn.classList.add('cart-btn');
            modalWindowBtn.textContent = 'Добавить в корзину';
            modalWindow.append(modalWindowBtn);

            const productName = document.createElement('p');
            productName.classList.add('product-name');
            productName.textContent = item.title;
            productCard.append(productName);

            const productDesc = document.createElement('p');
            productDesc.classList.add('product-desc');
            productDesc.textContent = item.description;
            productCard.append(productDesc);

            const productPrice = document.createElement('p');
            productPrice.classList.add('product-price');
            productPrice.textContent = item.price;
            productCard.append(productPrice);
        });

    })