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
  let slides = document.getElementsByClassName("testimonial-item");
  let dots = document.getElementsByClassName("bunder");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
	slides[i].className = slides[i].className.replace(" aktif efekfade", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].className += " aktif efekfade";
  dots[slideIndex-1].className += " active";
} 