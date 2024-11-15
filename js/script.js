// sidenav
function openNav() {
  document.getElementById('sidenav').style.width = '150px';
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
  bulb.src = "/assets/dark mode icon/bulb-light.png";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (!document.getElementById("checkbox-dark-mode").checked) {
    localStorage.setItem("darkMode", false);
    bulb.src ="/assets/dark mode icon/bulb-dark.png";
    document.querySelector(".ham-icon").style.color = "black";
  } else {
    localStorage.setItem("darkMode", true);
    document.querySelector(".ham-icon").style.color = "white";
    bulb.src = "/assets/dark mode icon/bulb-light.png";
  }
}
// dark mode end
// carousel
let slideIndex = 0;
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