document.addEventListener("DOMContentLoaded", function () {
    const weather = document.getElementById("weather");
    const todo = document.getElementById("todo");
    const midiora = document.getElementById("midiora");
    const cudos = document.getElementById("cudos");
    const random = document.getElementById("random");

    weather.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/WEATHER/", "_parent")
    })
    todo.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/TO-DO/", "_parent")
    })
    midiora.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/MiDiORA/", "_parent")
    })
    cudos.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/CUDOS/", "_parent")
    })
    random.addEventListener("click", function () {
        window.open("https://replit.com/@ManishKrBarman/Random-Language", "_parent")
    })




    // MOBILE CARD DESIGN

    const slides = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.dots');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0; // Start from the first slide
    let startX = 0;
    let isDragging = false;

    // Create dots dynamically based on the number of slides
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active'); // Set the first dot as active
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    // Function to go to a specific slide
    const goToSlide = (index) => {
        currentIndex = index;
        updateSliderPosition();
        updateActiveDot();
    };

    // Function to update the active dot
    const updateActiveDot = () => {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    // Update slider position
    const updateSliderPosition = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateActiveDot();
    };

    // Handle swipe gestures
    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;

        // Allow some movement while dragging
        slides.style.transform = `translateX(calc(-${currentIndex * 100}% - ${deltaX}px))`;
    };

    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;

        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        // Move to the next or previous slide based on swipe distance
        if (deltaX > 50) {
            // Next slide
            currentIndex = (currentIndex + 1) % slideCount; // Infinite scroll
        } else if (deltaX < -50) {
            // Previous slide
            currentIndex = (currentIndex - 1 + slideCount) % slideCount; // Infinite scroll
        }

        updateSliderPosition();
    };

    // Add touch event listeners
    slides.addEventListener('touchstart', handleTouchStart);
    slides.addEventListener('touchmove', handleTouchMove);
    slides.addEventListener('touchend', handleTouchEnd);

    // Initialize the slider
    updateSliderPosition();

});