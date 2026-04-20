document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const toppings = document.getElementById("toppings");

    // 1. Loader Logic - Fades out once the page is ready
    window.addEventListener("load", () => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    });

    // 2. Sticky Header Scroll Effect
    // Hides the "toppings" bar when scrolling down, shows it when scrolling up
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            toppings.style.transform = "translateY(0)";
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 150) {
            // Scrolling Down
            toppings.style.transform = "translateY(-100%)";
        } else {
            // Scrolling Up
            toppings.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
    });

    // 3. Smooth handling for image loading
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.transition = "opacity 0.5s ease-in-out";
        if (!img.complete) {
            img.style.opacity = "0";
            img.onload = () => img.style.opacity = "1";
        }
    });
});
