
function openMenu(){
  document.getElementById("menu").classList.add("active");
}

function closeMenu(){
  document.getElementById("menu").classList.remove("active");
}

function toggleDarkmode(){
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  const logo = document.getElementById("logo");

  if (isDark) {
    logo.src = "images/logo1.png";
  } else {
    logo.src = "images/logo3.png";
  }
}