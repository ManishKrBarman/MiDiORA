document.addEventListener("DOMContentLoaded", function () {
    const weather = document.getElementById("weather");
    const todo = document.getElementById("todo");
    const midiora = document.getElementById("midiora");
    const cudos = document.getElementById("cudos");
    const random = document.getElementById("random");

    // Link redirection for the slides (Mobile & Desktop)
    weather.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/WEATHER/", "_parent");
    });
    todo.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/TO-DO/", "_parent");
    });
    midiora.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/MiDiORA/", "_parent");
    });
    cudos.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/CUDOS/", "_parent");
    });
    random.addEventListener("click", function () {
        window.open("https://replit.com/@ManishKrBarman/Random-Language", "_parent");
    });

    // MOBILE SLIDER FUNCTIONALITY
    const slides = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.dots');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    // Create dots dynamically
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    // Functions to navigate the slider and update dots
    const goToSlide = (index) => {
        currentIndex = index;
        updateSliderPosition();
        updateActiveDot();
    };

    const updateActiveDot = () => {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const updateSliderPosition = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateActiveDot();
    };

    // Handle touch events for swipe
    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;
        slides.style.transform = `translateX(calc(-${currentIndex * 100}% - ${deltaX}px))`;
    };

    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;
        if (deltaX > 50) {
            currentIndex = (currentIndex + 1) % slideCount;
        } else if (deltaX < -50) {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        }
        updateSliderPosition();
    };

    slides.addEventListener('touchstart', handleTouchStart);
    slides.addEventListener('touchmove', handleTouchMove);
    slides.addEventListener('touchend', handleTouchEnd);

    // Initialize the slider
    updateSliderPosition();

    // Ensure card click redirection works for both mobile and desktop
    const desktopCards = document.querySelectorAll('.card');  // Get all the desktop cards

    desktopCards.forEach(card => {
        card.addEventListener("click", function () {
            const id = card.id;  // Get the ID of the clicked card
            switch (id) {
                case 'weather':
                    window.open("https://manishkrbarman.github.io/WEATHER/", "_parent");
                    break;
                case 'todo':
                    window.open("https://manishkrbarman.github.io/TO-DO/", "_parent");
                    break;
                case 'midiora':
                    window.open("https://manishkrbarman.github.io/MiDiORA/", "_parent");
                    break;
                case 'cudos':
                    window.open("https://manishkrbarman.github.io/CUDOS/", "_parent");
                    break;
                case 'random':
                    window.open("https://replit.com/@ManishKrBarman/Random-Language", "_parent");
                    break;
                default:
                    break;
            }
        });
    });

    // Ensure mobile link redirection works by listening for clicks on the slides
    const mobileSlides = document.querySelectorAll('.slide');  // Get all the slides for mobile

    mobileSlides.forEach(slide => {
        slide.addEventListener("click", function () {
            const id = slide.id;  // Get the ID of the clicked slide
            switch (id) {
                case 'weather':
                    window.open("https://manishkrbarman.github.io/WEATHER/", "_parent");
                    break;
                case 'todo':
                    window.open("https://manishkrbarman.github.io/TO-DO/", "_parent");
                    break;
                case 'midiora':
                    window.open("https://manishkrbarman.github.io/MiDiORA/", "_parent");
                    break;
                case 'cudos':
                    window.open("https://manishkrbarman.github.io/CUDOS/", "_parent");
                    break;
                case 'random':
                    window.open("https://replit.com/@ManishKrBarman/Random-Language", "_parent");
                    break;
                default:
                    break;
            }
        });
    });

});
