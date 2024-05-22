var myCarousel = document.querySelector('#multiItemCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,  // Time in milliseconds
  wrap: true      // Whether the carousel should cycle continuously
})

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
