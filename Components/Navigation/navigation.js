const submenuLinks = document.querySelectorAll("[data-submenu-target]");

submenuLinks.forEach((submenuLink) => {
  submenuLink.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = document.querySelector(submenuLink.dataset.submenuTarget);
    submenu.classList.toggle("active");
  });
});
