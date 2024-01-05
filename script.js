
let navbarList = document.getElementById('navbarList');
let windowWidth = window.innerWidth;
let hamburgerMenu = document.querySelector('.hamburger');
const navButton = document.querySelector('button[aria-expanded]');
const nav = document.getElementById("topNav");

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

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


function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
  if (expanded) {
    hamburgerMenu.innerHTML = `&#9776;`;
  } else {
    hamburgerMenu.innerHTML = `&#88;`; 
    console.log(target);
  }
}
navButton.addEventListener('click', toggleNav);
removeAlignCenter();