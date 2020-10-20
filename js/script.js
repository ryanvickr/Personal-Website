"use strict";
// Shrink the header when use scrolls down
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("name").style.fontSize = "2vw";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("name").style.fontSize = "4.25vw";
  }
}

function setActive(idName) {
  // make the new "page" active
  const ids = ['navAbout', 'navProjects', 'navEducation', 'navContact'];

  ids.forEach(function (id) {
    const elmt = document.getElementById(id);
    if (idName === id)
      elmt.className = 'active';
    else
      elmt.classList.remove('active');
  });
}