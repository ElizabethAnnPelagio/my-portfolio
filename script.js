
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const yearElement = document.getElementById("year");

  // Update the copyright year
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

        // Navigate to the selected section
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          history.replaceState(null, "", targetId);
        }
      });
    });
  }

  // Make sure the Contact section can be reached
  const contactLinks = document.querySelectorAll('a[href="#contact"]');
  const contactSection = document.getElementById("contact");

  contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (contactSection) {
        contactSection.style.display = "block";
        contactSection.style.visibility = "visible";
      }
    });
  });
});
