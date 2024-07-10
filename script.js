function redirectToProducts() {
    window.location.href = 'products.html';
}

function redirectToPromotions() {
    window.location.href = 'promocoes.html';
}

const btnHero = document.querySelector('#hero button');
if (btnHero) {
    btnHero.addEventListener('click', redirectToProducts);
}

const btnPromocoes = document.querySelector('#promocoes button');
if (btnPromocoes) {
    btnPromocoes.addEventListener('click', redirectToPromotions);
}

function initCarousel() {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByClassName('carousel-slide');
    let index = 0;

    function showSlide() {
        for (let slide of slides) {
            slide.classList.remove('active');
        }
        slides[index].classList.add('active');
    }

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide();
    }

    function previousSlide() {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        showSlide();
    }

    showSlide();
    setInterval(nextSlide, 5000);

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', previousSlide);
    nextButton.addEventListener('click', nextSlide);
}

initCarousel();

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuNav = document.querySelector('.nav-bar');

    hamburgerMenu.addEventListener('click', function() {
        const isOpen = hamburgerMenu.classList.toggle('open');
        menuNav.classList.toggle('open');
        hamburgerMenu.setAttribute('aria-expanded', isOpen);
        console.log(menuNav.className)
    });
});