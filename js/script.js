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
  bulb.src = "/assets/dark mode icon/bulb-light.png";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (!document.getElementById("checkbox-dark-mode").checked) {
    localStorage.setItem("darkMode", false);
    bulb.src ="/assets/dark mode icon/bulb-dark.png";
  } else {
    localStorage.setItem("darkMode", true);
    bulb.src = "/assets/dark mode icon/bulb-light.png";
  }
}
// dark mode end
