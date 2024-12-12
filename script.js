// JavaScript to handle the toggle menu functionality
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Switch between hamburger and cross icon
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});





// JavaScript for Hero Slider with Text and CTA Animation
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.left = '0';
            slide.classList.add('active');

            // Trigger animation for text after a delay
            const content = slide.querySelector('.content');
            const cta = slide.querySelector('.cta');

            setTimeout(() => {
                content.classList.add('animate');
            }, 1000); // 1 second delay for text animation

            // Trigger animation for CTA button after a delay
            setTimeout(() => {
                if (cta) cta.classList.add('animate-from-bottom');
            }, 1500); // 1.5 seconds delay for CTA animation

        } else {
            slide.style.left = '100%';
            slide.classList.remove('active');

            // Reset text and CTA animation immediately
            const content = slide.querySelector('.content');
            const cta = slide.querySelector('.cta');

            content.classList.remove('animate');
            if (cta) cta.classList.remove('animate-from-bottom');
        }
    });
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);

showSlide(currentIndex);








const images = document.querySelectorAll('.image-grid img');
const details = document.querySelectorAll('.detail');

images.forEach((image) => {
    image.addEventListener('click', () => {
        // Remove active class from all images and details
        images.forEach((img) => img.classList.remove('active'));
        details.forEach((detail) => detail.classList.remove('active'));

        // Add active class to clicked image and corresponding detail
        image.classList.add('active','box-right');
        const detailId = image.getAttribute('data-detail',);
        document.getElementById(detailId).classList.add('active');
    });
});





let index = 0;
const logos = document.querySelectorAll('.client-logo');
const totalLogos = logos.length;

setInterval(() => {
  index++;
  if (index >= totalLogos) {
    index = 0;
  }
  document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 240}px)`;
}, 3000); // Adjust timing for the interval












