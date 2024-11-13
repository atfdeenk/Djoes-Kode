// sidenav
function openNav() {
  document.getElementById('sidenav').style.width = '150px';
  // document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById('sidenav').style.width = '0';
  // document.getElementById("main").style.margin= "20px 40px";
  // document.getElementById("main").style.padding= "10px";
}
// sidenav end

// dark mode
// initial state
 if (localStorage.getItem("darkMode") === "true") {
  document.getElementById("checkbox-dark-mode").checked = true;
  document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (!document.getElementById("checkbox-dark-mode").checked) {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
}

// let bulb = document.getElementById('bulb-dark');
// function darkMode (params) {
//   console.log(params);
//   if (params == "dark") {
//     bulb-darkMode.src = "/assets/dark mode icon/bulb-light.png"
//   }
// }
// dark mode end
