let currentIndex = 0;
const totalSlides = 2; // (6 kurser / 3 per vy)
const carousel = document.querySelector(".carousel");
const nextSlide = document.querySelector(".carousel-button.next");
const previousSlide = document.querySelector("#carousel-button-prev");

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    if (direction > 0) {
        
    }

    carousel.style.transform = `translateX(-${currentIndex * 80}%)`;
}

// Add event listeners
nextSlide.addEventListener("click", () => moveSlide(1));
previousSlide.addEventListener("click", () => moveSlide(-1));
