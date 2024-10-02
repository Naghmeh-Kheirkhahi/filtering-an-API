
fetch('https://fakestoreapi.com/products/')
.then(res => res.json())
.then(data => {
    console.log(data);

    data.forEach(product => {
        document.body.innerHTML = `
        `
    });
});