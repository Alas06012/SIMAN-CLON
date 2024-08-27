const menuIcon = document.querySelector('.menu-icon');
const dropdownPanel = document.querySelector('.dropdown-panel');
const closeBtn = document.querySelector('.close-btn');

// Función para mostrar el panel
menuIcon.addEventListener('click', () => {
    dropdownPanel.classList.add('show');
});

// Función para cerrar el panel
closeBtn.addEventListener('click', () => {
    dropdownPanel.classList.remove('show');
});

// También puedes cerrar el panel si se hace clic fuera de él (opcional)
window.addEventListener('click', (e) => {
    if (!dropdownPanel.contains(e.target) && !menuIcon.contains(e.target)) {
        dropdownPanel.classList.remove('show');
    }
});




const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto slide
setInterval(() => {
    showSlide(currentIndex + 1);
}, 4000);

