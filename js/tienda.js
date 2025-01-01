document.querySelectorAll('.slider-tiendas').forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('.tienda-img');
    const totalImages = images.length;

    
    images[currentIndex].classList.add('active');

   
    slider.querySelector('.next').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    });

   
    slider.querySelector('.prev').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].classList.add('active');
    });
});


const tiendas = document.querySelectorAll('.tienda');

tiendas.forEach(tienda => {
    const images = tienda.querySelectorAll('.tienda-img');
    const prevButton = tienda.querySelector('.prev');
    const nextButton = tienda.querySelector('.next');
    const descripcionElement = tienda.querySelector('.descripcion');
    const precioElement = tienda.querySelector('.precio');

    let currentIndex = 0;

    
    function updateContent(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index); 
        });

        
        descripcionElement.textContent = images[index].dataset.descripcion;
        precioElement.textContent = images[index].dataset.precio;
    }

   
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent(currentIndex);
    });

    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent(currentIndex);
    });

    updateContent(currentIndex);
});