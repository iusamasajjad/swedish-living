
// ============ mobile-hamburger-function
// menu-function

function menuToggle() {
    var x = document.getElementById("mobile-menu");
    x.style.width = "100%";
  }
  function menuClose() {
    var x = document.getElementById("mobile-menu");
    x.style.width = "0%";
  }
  function readMore(text,btnText) {
    var moreText = document.getElementById(text);
    var btn = document.getElementById(btnText);
    if(moreText.style.display == "block"){
      moreText.style.display = "none";
      btn.textContent = 'Read More';
    }else{
      moreText.style.display = "block";
      btn.textContent = 'Read Less';
    }
  }
  function toggle(text,plusIcon,crossIcon) {
    var moreText = document.getElementById(text);
    var plus = document.getElementById(plusIcon);
    var cross = document.getElementById(crossIcon);
    if(moreText.style.display == "block"){
      moreText.style.display = "none";
      plus.style.display = "block";
      cross.style.display = "none";
    }else{
      moreText.style.display = "block";
      plus.style.display = "none";
      cross.style.display = "block";
    }
  }
  document.getElementById('private').addEventListener('click', function() {
    document.getElementById('privateCards').classList.remove('display-none');
    document.getElementById('realEstateCards').classList.add('display-none');
    document.getElementById('private').classList.add('text-white', 'border-0', 'bg-blue');
    document.getElementById('private').classList.remove('text-blue' ,'border-blue', 'bg-transparent');
    document.getElementById('realEstateCompany').classList.remove('text-white', 'border-0', 'bg-blue');
    document.getElementById('realEstateCompany').classList.add('text-blue' ,'border-blue', 'bg-transparent');
});

document.getElementById('realEstateCompany').addEventListener('click', function() {
    document.getElementById('privateCards').classList.add('display-none');
    document.getElementById('realEstateCards').classList.remove('display-none');
    document.getElementById('private').classList.add('text-blue' ,'border-blue', 'bg-transparent');
    document.getElementById('private').classList.remove('text-white', 'border-0', 'bg-blue');
    document.getElementById('realEstateCompany').classList.add('text-white', 'border-0', 'bg-blue');
    document.getElementById('realEstateCompany').classList.remove('text-blue' ,'border-blue', 'bg-transparent');
});
// custom slider
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');
const isMobile = window.matchMedia('(max-width: 767px)').matches;

document.addEventListener('DOMContentLoaded', () => {
    updateSlidePosition(); // Ensure DOM is fully loaded before setting position
});

function moveSlide(direction) {
    if (!isMobile) return;
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateSlidePosition();
}

function goToSlide(slideIndex) {
    if (!isMobile) return;
    
    currentSlide = slideIndex;
    updateSlidePosition();
}

function updateSlidePosition() {
    if (!isMobile) return;
    
    const slideWidth = document.querySelector('.slide').offsetWidth + 20;
    const offset = -currentSlide * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
});

// Swipe functionality for mobile
let startX;

document.body.addEventListener('touchstart', function(e) {
    if (e.target.closest('.slides')) {
        startX = e.touches[0].clientX;
    }
}, { passive: true });

document.body.addEventListener('touchend', function(e) {
    if (e.target.closest('.slides')) {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (diff > 50) {
            moveSlide(-1);
        } else if (diff < -50) {
            moveSlide(1);
        }
    }
}, { passive: true });

