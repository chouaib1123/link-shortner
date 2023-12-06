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
function next1() {
  const content1 = document.querySelector(".screen21");
  const content2 = document.querySelector(".screen22");
  const test = document.querySelector(".joinaschoices1 .inp").textContent;
  if (test === "Affiliate") content1.style.transform = "translateX(0%)";
  else if (test === "Seller") content2.style.transform = "translateX(0%)";
}
function next2() {
  const content = document.querySelector(".screen211");
  content.style.transform = "translateX(0%)";
}
function next21() {
  const content = document.querySelector(".screen222");
  content.style.transform = "translateX(0%)";
}
function next3() {
  const content = document.querySelector(".screen_last");
  content.style.transform = "translateX(0%)";
}
function back2() {
  const content = document.querySelector(".screen211");
  content.style.transform = "translateX(100%)";
}
function back21() {
  const content = document.querySelector(".screen222");
  content.style.transform = "translateX(100%)";
}
function back1() {
  const content = document.querySelectorAll(".screen2");

  content.forEach((container) => {
    container.style.transform = "translateX(100%)";
  });
}
function goback() {
  const content = document.querySelector(".main-container");
  const containers = document.querySelectorAll(".screen");

  containers.forEach((container) => {
    container.style.transform = "translateX(100%)";
  });
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

function setupDropdownListeners(
  choicesClass,
  dropdownClass,
  choicesSelector,
  updateFunction
) {
  document.querySelector(choicesClass).addEventListener("click", function () {
    var dropdown = document.querySelector(dropdownClass);
    dropdown.style.display =
      dropdown.style.display === "none" || dropdown.style.display === ""
        ? "block"
        : "none";
  });

  document
    .querySelectorAll(`${dropdownClass} ${choicesSelector}`)
    .forEach(function (choix) {
      choix.addEventListener("click", function () {
        var flech = document.querySelector(`${choicesClass} .flech`);
        flech.classList.remove("rotate");
        updateFunction(choix.textContent);
        joinastype = choix.textContent;
      });
    });
}

function updateJoinAs(type, choicesClass, dropdownClass) {
  document.querySelector(`${choicesClass} .inp`).textContent = type;
  var dropdown = document.querySelector(dropdownClass);
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";
}

setupDropdownListeners(
  ".joinaschoices1",
  ".joinasdropdown1",
  ".choix",
  function (type) {
    updateJoinAs(type, ".joinaschoices1", ".joinasdropdown1");
  }
);

setupDropdownListeners(
  ".joinaschoices2",
  ".joinasdropdown2",
  ".choix",
  function (type) {
    updateJoinAs(type, ".joinaschoices2", ".joinasdropdown2");
  }
);

setupDropdownListeners(
  ".joinaschoices3",
  ".joinasdropdown3",
  ".choix",
  function (type) {
    updateJoinAs(type, ".joinaschoices3", ".joinasdropdown3");
  }
);

setupDropdownListeners(
  ".joinaschoices4",
  ".joinasdropdown4",
  ".choix",
  function (type) {
    updateJoinAs(type, ".joinaschoices4", ".joinasdropdown4");
  }
);

document.querySelectorAll(".joinaschoices").forEach(function (joinaschoice) {
  joinaschoice.addEventListener("click", function () {
    var flech = joinaschoice.querySelector(".flech");

    flech.classList.toggle("rotate");
  });
});
