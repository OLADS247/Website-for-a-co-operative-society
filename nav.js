
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (!navToggle || !navList) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("show");
    navToggle.classList.toggle("open", isOpen);
    // Change icon for open/close
    navToggle.querySelector(".icon").textContent = isOpen ? "✕" : "☰";
  });

  // Optional: close menu when a link is clicked
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
      navToggle.classList.remove("open");
      navToggle.querySelector(".icon").textContent = "☰";
    });
  });
});
