var openDiv = null;

function toggleHeight(clickedDiv) {
  if (openDiv && openDiv !== clickedDiv) {
    openDiv.style.maxHeight = "100px";
    openDiv.querySelector(".question .vect").classList.remove("rotate");
  }

  if (
    clickedDiv.style.maxHeight === "100px" ||
    clickedDiv.style.maxHeight === ""
  ) {
    clickedDiv.style.maxHeight = "500px";

    openDiv = clickedDiv;
    openDiv.querySelector(".question .vect").classList.add("rotate");
  } else {
    clickedDiv.style.maxHeight = "100px";
    openDiv.querySelector(".question .vect").classList.remove("rotate");
    openDiv = null;
  }
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;
  const scrollPosition = window.scrollY;
  const firstsection = document.querySelector(".first_vue");
  const home = document.querySelector(".gobacktotop");
  if (scrollPosition >= navbarHeight) {
    navbar.classList.add("sticky");
    firstsection.classList.add("under-navbar");
    home.classList.add("stickky");
  } else {
    navbar.classList.remove("sticky");
    firstsection.classList.remove("under-navbar");
    home.classList.remove("stickky");
  }
});
function joinUs() {
  const container = document.querySelector(".main-container");
  const content = document.querySelector(".screen1");
  const home = document.querySelector(".gobacktotop");
  home.classList.remove("stickky");
  container.style.transform = "translateX(-100%)";
  content.style.transform = "translateX(0%)";

  document.body.classList.add("overflow-hidden");
}

function goback() {
  const content = document.querySelector(".main-container");
  const container = document.querySelector(".screen1");
  container.style.transform = "translateX(100%)";
  content.style.transform = "translateX(0%)";
  setTimeout(function () {
    location.reload();
  }, 1000);

  document.body.classList.remove("overflow-hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop =
          targetSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

const backToTopButton = document.getElementById("back-to-top-btn");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
