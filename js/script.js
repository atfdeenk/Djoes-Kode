// sidenav
function openNav() {
  document.getElementById('sidenav').style.width = '100px';
}

function closeNav() {
  document.getElementById('sidenav').style.width = '0';
}
// sidenav end

// dark mode
// initial state
 if (localStorage.getItem("darkMode") === "true") {
  document.getElementById("checkbox-dark-mode").checked = true;
  document.body.classList.add("dark-mode");
  document.querySelector(".ham-icon").style.color = "white";
  bulb.src = "/assets/bulb/bulb-light.png";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (!document.getElementById("checkbox-dark-mode").checked) {
    localStorage.setItem("darkMode", false);
    bulb.src ="/assets/bulb/bulb-dark.png";
    document.querySelector(".ham-icon").style.color = "black";
  } else {
    localStorage.setItem("darkMode", true);
    document.querySelector(".ham-icon").style.color = "white";
    bulb.src = "/assets/bulb/bulb-light.png";
  }
}
// dark mode end

// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
// carousel end

// scroll to top
let mybutton = document.getElementById('goTop');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// scroll to top end