// Vanilla JS replacement for jQuery functionality
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll(".site-nav__link").forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = this.getAttribute("href");
      if (target.startsWith("#")) {
        e.preventDefault();

        const targetElement = document.querySelector(target);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;

          // Smooth scrolling with easing
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Close mobile menu if open
          const navMenu = document.querySelector(".site-nav__list");
          if (navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            document
              .querySelector(".site-nav__toggler")
              .classList.remove("active");
          }
        }
      }
    });
  });

  // Mobile menu toggle
  const navbarToggler = document.querySelector(".site-nav__toggler");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      const navMenu = document.querySelector(".site-nav__list");
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });
  }
});
