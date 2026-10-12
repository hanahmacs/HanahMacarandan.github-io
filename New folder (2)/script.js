
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

// Close the menu after clicking a navigation link
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");

    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();
