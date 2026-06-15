var settingdMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingdMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");

  // apply dark theame
  document.body.classList.toggle("dark-theame");

  if (localStorage.getItem("theame") == "light") {
    localStorage.setItem("theame", "dark");
  } else {
    localStorage.setItem("theame", "light");
  }
};

// fix the dark mode problem
// localStorage.setItem("theame" ,"light")
// localStorage.getItem("theame")

if (localStorage.getItem("theame") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theame");
} else if (localStorage.getItem("theame") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theame");
} else {
  localStorage.setItem("theame", "light");
}
