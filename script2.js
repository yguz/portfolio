document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth" // Smooth scrolling
            });
        });
    });

    const movieList = document.querySelector(".movie-list");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const cardsToShow = 3; // Number of cards to show at a time
    let currentIndex = 0;

    // Update button visibility logic
    function updateCarousel() {
        const movieCards = document.querySelectorAll(".movie-card");
        const totalCards = movieCards.length;
        const maxIndex = Math.max(0, totalCards - cardsToShow);
    
        // prevButton.style.display = currentIndex > 0 ? "block" : "none";
        // nextButton.style.display = currentIndex < maxIndex ? "block" : "none";
    
        const cardWidth = movieCards[0].offsetWidth; // Get the width of the first card
        const cardMargin = parseInt(getComputedStyle(movieCards[0]).marginRight); // Get margin dynamically
        const offset = -currentIndex * (cardWidth + cardMargin);
        movieList.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener("click", () => {
        const totalCards = document.querySelectorAll(".movie-card").length;
        const maxIndex = Math.max(0, totalCards - cardsToShow);
        
        if (currentIndex < 2) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    prevButton.addEventListener("click", () => {
        if (currentIndex > -2) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize carousel
    updateCarousel();



    // chatbot code 

    
    
    
});
