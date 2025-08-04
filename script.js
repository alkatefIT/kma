let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

////////////////////////////////////////////////////////////////////////////////////////

// menu //

let menuList = document.getElementById("menu-list");

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "600px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

document.body.addEventListener("click", function (event) {
  // Check if the clicked element is not part of the menu button or menu list
  if (
    !event.target.closest(".menu-button") &&
    !event.target.closest("#menu-list")
  ) {
    menuList.style.maxHeight = "0px";
  }
});

////////////////////////////////////////////////////////////////////////////////////////


// donation numbers increasing //

function startCountAnimation(targetId, finalValue, duration) {
  let start = 0;
  const increment = finalValue / duration;
  const targetElement = document.getElementById(targetId);

  const interval = setInterval(function () {
    start += increment;
    targetElement.innerHTML =
      numberWithCommas(Math.ceil(start)) + '<span class="plus-icon">+</span>';

    if (start >= finalValue) {
      clearInterval(interval);
      targetElement.innerHTML =
        numberWithCommas(finalValue) + '<span class="plus-icon">+</span>';
    }
  }, 1000 / 60); // Adjust the interval for smoother animation
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

////////////////////////////////////////////////////////////////////////////////////////


// back top icon //

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-top");
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

document.getElementById("back-top").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll behavior
  });
});

////////////////////////////////////////////////////////////////////////////////////////