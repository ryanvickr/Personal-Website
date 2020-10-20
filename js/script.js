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

function scrollToAbout() {
  elmt = document.getElementById("aboutsection");
  elmt.scrollIntoView();
}