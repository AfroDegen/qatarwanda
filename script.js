
/* VIVANTE VOYAGE
   Minimal navigation and footer functionality.
*/

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

// Mobile navigation
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    siteNav.classList.toggle("is-open", !isOpen);
  });

  // Close navigation after selecting a section
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

// Automatic copyright year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
