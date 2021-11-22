//Slides == Header, Slides2 == Vision Slides
let slides = document.getElementsByClassName("mySlides");
let slides2 = document.getElementsByClassName("mySlides2");

//First Slider - Banner, Automatic
let slideIndex = 0;

function showSlides() {
  let i;
  //Remove all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Incr index
  slideIndex++;
  //If index > slide.length => index = 1, infinite iteration
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  //Displays next == always last slide
  slides[slideIndex - 1].style.display = "block";
  //Automatic Changes every 5000ms
  setTimeout(showSlides, 5000);
}

/***********************/

//Second Slider - Vision, Manual
let slideIndex2 = 0;

// Pranon parameter nga HTML, next/previous (1, -1)
function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

//Funksioni, pranon parameter per next / prev
function showSlides2(n) {
  let i;
  //If index > slide.length => index = 1, infinite iteration
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  //If index < slide.length => index = slides.length, infinite iteration
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  //Remove all slides
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  //Displays next == always last slide
  slides2[slideIndex2 - 1].style.display = "block";
}

//Call Slider Functions
showSlides();
showSlides2(slideIndex2);
