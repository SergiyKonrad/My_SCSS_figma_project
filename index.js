let slideIndex = 0

function showSlides(index) {
  let slides = document.querySelectorAll('.carousel-item')
  if (index >= slides.length) slideIndex = 0
  if (index < 0) slideIndex = slides.length - 4
  slides.forEach((slide, i) => {
    if (i >= slideIndex && i < slideIndex + 4) {
      slide.style.display = 'block'
    } else {
      slide.style.display = 'none'
    }
  })
}

function nextSlide() {
  slideIndex += 1
  if (slideIndex > document.querySelectorAll('.carousel-item').length - 4) {
    slideIndex = 0
  }
  showSlides(slideIndex)
}

function prevSlide() {
  slideIndex -= 1
  if (slideIndex < 0) {
    slideIndex = document.querySelectorAll('.carousel-item').length - 4
  }
  showSlides(slideIndex)
}

showSlides(slideIndex)

// Burger menu

// const burgerMenu = document.getElementById('burger-menu');
// const mobileNav = document.getElementById('mobile-nav');

// burgerMenu.addEventListener('click', () => {
//   mobileNav.classList.toggle('open');
//   burgerMenu.classList.toggle('open');
// });
