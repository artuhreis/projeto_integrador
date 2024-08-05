const carousels = {
    'carousel1': 0,
    'carousel2': 0,
    'carousel3': 0
};

function showSlide(carouselId, slideIndex) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length) {
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

// Optionally, add automatic slide rotation for each carousel
setInterval(() => {
    nextSlide('carousel1');
}, 3000); // Change slide every 3 seconds for the first carousel

setInterval(() => {
    nextSlide('carousel2');
}, 3000); // Change slide every 3 seconds for the second carousel

setInterval(() => {
    nextSlide('carousel3');
}, 3000); // Change slide every 3 seconds for the second carousel