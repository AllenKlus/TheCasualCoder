document.getElementById("burger_icon").addEventListener("touchstart", myFunction)
document.getElementById("burger_icon").addEventListener("touchend", myFunction)
function myFunction() {
  var x = document.getElementById("responsive_links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
