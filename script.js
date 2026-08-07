document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Mobile Menu Toggle
    // ===========================
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navbar");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // ===========================
    // Sticky Header Shadow
    // ===========================
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        } else {
            header.style.boxShadow = "";
        }
    });

    // ===========================
    // Smooth Scrolling
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            if (nav) {
                nav.classList.remove("open");
            }

        });

    });

    // ===========================
    // Scroll Reveal Animation
    // ===========================
    const animatedItems = document.querySelectorAll(
        ".doctor-card, .service-card, .feature, .cta, .section-title"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    animatedItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.6s ease";

        observer.observe(item);

    });

    // ===========================
    // Active Navigation
    // ===========================
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

    // ===========================
    // Contact Form Demo
    // ===========================
    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been received.");

            form.reset();

        });

    }

});
const galleryImages = document.querySelectorAll(".gallery-img");
const galleryLightbox = document.querySelector(".gallery-lightbox");
const galleryPreview = document.getElementById("galleryPreview");
const closeGallery = document.querySelector(".close-gallery");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        galleryLightbox.style.display = "flex";
        galleryPreview.src = image.src;
    });
});

closeGallery.addEventListener("click", () => {
    galleryLightbox.style.display = "none";
});

galleryLightbox.addEventListener("click", e => {
    if (e.target === galleryLightbox) {
        galleryLightbox.style.display = "none";
    }
});