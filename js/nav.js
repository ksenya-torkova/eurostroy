var catalogNav = document.querySelector(".main-aside-menu-wrapper");
var catalogNavToggle = document.querySelector(".main-aside-menu button");


catalogNavToggle.addEventListener("click", function() {
  if (catalogNav.classList.contains("visible")) {
    catalogNav.classList.remove("visible");
  }

  else {
    catalogNav.classList.add("visible");
  }
});

catalogNavToggle.addEventListener("click", function(event) {
  event.preventDefault();
  catalogNavToggle.classList.toggle("active");
});