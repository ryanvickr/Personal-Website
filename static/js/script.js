"use strict";
// Shrink the header when use scrolls down
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "20px 10px 0px 10px";
    document.getElementById("namelink").style.fontSize = "2.75vw";
    // document.getElementById("name").style.paddingBottom = "0.5vw";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px 5px 10px";
    document.getElementById("namelink").style.fontSize = "4.25vw";
    // document.getElementById("name").style.paddingBottom = "1vw";
  }
}

// Make the current "page" button active
function setActive(idName) {
  const ids = ['navAbout', 'navProjects', 'navExperience', 'navContact'];

  ids.forEach(function (id) {
    const elmt = document.getElementById(id);
    if (idName === id)
      elmt.className = 'active';
    else
      elmt.classList.remove('active');
  });
}

// Switch between small screen menu and normal menu
function menuControl() {
  var x = document.getElementById("my-small-menu");
  if (x.className === "small-menu") {
    x.className += " responsive";
  } else {
    x.className = "small-menu";
  }
}