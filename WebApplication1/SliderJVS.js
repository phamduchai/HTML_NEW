const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let isMouseOver = false;
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

sliderContainer.addEventListener('mouseenter', () => {
    isMouseOver = true;
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
});


sliderContainer.addEventListener('mouseleave', () => {
    isMouseOver = false;
    setTimeout(() => {
        if (!isMouseOver) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    }, 0);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});


showSlide(currentIndex);
