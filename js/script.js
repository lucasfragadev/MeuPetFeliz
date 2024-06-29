// script.js

// Função para redirecionar para a página de produtos
function redirectToProducts() {
    window.location.href = 'products.html';
}

// Função para redirecionar para a página de promoções
function redirectToPromotions() {
    window.location.href = 'promocoes.html';
}

// Event listeners para os botões
document.addEventListener('DOMContentLoaded', function() {
    // Botão "Conheça nossos produtos" na seção hero
    const btnHero = document.querySelector('#hero button');
    if (btnHero) {
        btnHero.addEventListener('click', redirectToProducts);
    }

    // Botão "Confira as promoções" na seção promoções
    const btnPromocoes = document.querySelector('#promocoes button');
    if (btnPromocoes) {
        btnPromocoes.addEventListener('click', redirectToPromotions);
    }
});

// carousel.js

// Função para inicializar o carrossel
function initCarousel() {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByClassName('carousel-slide');
    let index = 0;

    // Função para mostrar o slide atual
    function showSlide() {
        // Esconde todos os slides
        for (let slide of slides) {
            slide.classList.remove('active');
        }
        // Mostra o slide atual
        slides[index].classList.add('active');
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0; // Volta ao primeiro slide se chegar ao final
        }
        showSlide();
    }

    // Função para voltar para o slide anterior
    function previousSlide() {
        index--;
        if (index < 0) {
            index = slides.length - 1; // Vai para o último slide se estiver no primeiro
        }
        showSlide();
    }

    // Inicializa o carrossel
    showSlide();

    // Avança para o próximo slide a cada 3 segundos
    setInterval(nextSlide, 15000);

    // Botões de navegação
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Event listeners para os botões
    prevButton.addEventListener('click', previousSlide);
    nextButton.addEventListener('click', nextSlide);
}

// Chama a função para inicializar o carrossel quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', initCarousel);
