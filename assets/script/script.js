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
  // function companySwitcher(privateCards,realEstateCards,privateBtn,realEstateBtn) {
  //   var privateCompanyCards = document.getElementById(privateCards);
  //   var realEstateCompanyCards = document.getElementById(realEstateCards);
  //   // var privateCompanyBtn = document.getElementById(privateBtn);
  //   // var realEstateCompanyBtn = document.getElementById(realEstateBtn);
  //   if(privateCompanyCards.style.display == "block"){
  //     realEstateCompanyCards.style.display = "none";
  //     // privateCompanyBtn.style.background = "#3B478B";
  //     // privateCompanyBtn.style.color = "#fff";
  //     // realEstateCompanyBtn.style.background = "transparent";
  //     // realEstateCompanyBtn.style.color = "#3B478B";
  //     // realEstateCompanyBtn.style.border = "1px solid #3B478B";
  //   } 
  //   if(realEstateCompanyCards.style.display == "block"){
  //     privateCompanyCards.style.display = "none"
  //     // realEstateCompanyBtn.style.background = "#3B478B";
  //     // realEstateCompanyBtn.style.color = "#fff";
  //     // privateCompanyBtn.style.background = "transparent";
  //     // privateCompanyBtn.style.color = "#3B478B";
  //     // privateCompanyBtn.style.border = "1px solid #3B478B";
  //   }
  // }
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
