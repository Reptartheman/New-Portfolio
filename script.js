let navbarNav = document.querySelector('.navbar-nav')
let navbarList = document.getElementById('navbarList');
let windowWidth = window.innerWidth;
let hamburgerMenu = document.querySelector('.hamburger');
const navButton = document.querySelector('button[aria-expanded]');
const nav = document.getElementById("topNav");


window.onscroll = function() {
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

function removeAlignCenter() {
  if (windowWidth <= 1023) {
    navbarList.classList.remove('flex-align-center');
  }
}



function toggleNav() {
  const expanded = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", !expanded);
  hamburgerMenu.innerHTML = expanded ? `&#9776;` : `&#88;`;
}


navButton.addEventListener('click', toggleNav);
removeAlignCenter();
