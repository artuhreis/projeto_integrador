const carousels = {
    'carousel1': 0,
    'carousel2': 0,
    'carousel3': 0,
    'carousel4': 0,
   
};

function showSlide(carouselId, slideIndex) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length -1) {
        carousels[carouselId] = 0;
    } else if (slideIndex < 0) {
        carousels[carouselId] = slides.length - 1;
    } else {
        carousels[carouselId] = slideIndex;
    }

    const offset = -carousels[carouselId] * 100;
    carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
    showSlide(carouselId, carousels[carouselId] + 1);
}

function prevSlide(carouselId) {
    showSlide(carouselId, carousels[carouselId] - 1);
}


setInterval(() => {
    nextSlide('carousel1');
}, 3000); 

setInterval(() => {
    nextSlide('carousel2');
}, 3000); 

setInterval(() => {
    nextSlide('carousel3');
}, 3000); 
setInterval(() => {
    nextSlide('carousel4');
}, 3000); 