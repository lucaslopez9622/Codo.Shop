let cart = [];


document.querySelectorAll('.btn-agregar-carrito').forEach((button, index) => {
    button.addEventListener('click', () => {
        const tienda = document.querySelectorAll('.tienda')[index];
        const productName = tienda.querySelector('h3').textContent;
        const productDescription = tienda.querySelector('.descripcion').textContent; 
        const productPrice = tienda.querySelector('.precio').textContent;
        
        const formattedPrice = parseFloat(productPrice.replace('$', '').replace('.', '').replace(',', '.'));

        
        const product = {
            id: Date.now(),
            name: productName,
            description: productDescription,
            price: formattedPrice
        };

        cart.push(product);
        console.log('Producto añadido al carrito:', product);

        
        updateCart();
    });
});


function updateCart() {
    const cartContainer = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    
    cart.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <p><strong>${product.name}</strong></p>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toLocaleString()}</p>
            <button class="btn-eliminar" data-id="${product.id}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(item);
    });

    
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toLocaleString()}`;

   
    cartContainer.classList.add('show');

    
    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            cart = cart.filter(product => product.id !== productId);
            updateCart();
        });
    });
}


document.getElementById('btn-comprar').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Compra realizada con éxito');
        cart = []; 
        updateCart();
    } else {
        alert('El carrito está vacío');
    }
});

document.getElementById('btn-cerrar').addEventListener('click', function () {
    const cart = document.getElementById('cart');
    cart.classList.remove('show'); 
});