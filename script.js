document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartCounter = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCounter.textContent = cartCount;
            alert("Item added to cart!");
        });
    });
});

// login 




// Slides 
let currentIndex = 0;
const slides = document.querySelector(".slides");

function nextSlide() {
    currentIndex = (currentIndex + 1) % 5; // Loops from last to first
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5; // Loops from first to last
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(${-currentIndex * 20}%)`;
}

// Auto Slide Every 3 Seconds
setInterval(nextSlide, 3000);

