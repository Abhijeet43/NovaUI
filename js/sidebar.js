const hamburgerBtn = document.querySelector(".bars");
const sideBar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("fa-xmark");
  sideBar.classList.toggle("sidebar-active");
});
