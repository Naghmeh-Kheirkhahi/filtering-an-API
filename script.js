
fetch('https://fakestoreapi.com/products/')
.then(res => res.json())
.then(data => {
    console.log(data);

    data.forEach(product => {

        let products = document.querySelector('.products');

        for (let index = 0; index < data.length; index++) {
            products.innerHTML += `
            <div class="col-3">
                <img src="${product.image}" alt="">
                <h4>${product.title}</h4>
                <p>${product.category}</p>
                <p>${product.price} euros</p>
                <p class="description">${product.description}</p>
            </div>
        `  
        }
        


    });
});


