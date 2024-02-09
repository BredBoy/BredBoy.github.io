let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";                                 //hiding the wrong slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");    //giving the correct slides correct classes
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";                         //showing the correct slides
}

// defining a function for showing the menupopup when clicking the menubutton
let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", showNav);

function showNav(){
  overlay.style.display = "block";
  menuBtn.style.display = "none";
  popUp.style.display = "block";
}
// hiding the menu popup when clicking the screen
let popUp = document.getElementById("menuPopup");
popUp.addEventListener("click", hidePopup);
let overlay = document.getElementById("overlay")
overlay.addEventListener("click", hidePopup)

function hidePopup(){
  overlay.style.display = "none";
  menuBtn.style.display = "block";
  popUp.style.display = "none";
}