const hamburgerBtn = document.querySelector(".bars");
const sideBar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector("#cross");

const openAside = () => {
  sideBar.classList.add("sidebar-active");
  closeBtn.classList.add("active");
  document.body.classList.add("overflow");
};

const closeAside = () => {
  sideBar.classList.remove("sidebar-active");
  closeBtn.classList.remove("active");
  document.body.classList.remove("overflow");
};

hamburgerBtn.addEventListener("click", () => {
  openAside();
});

sideBar.addEventListener("click", (e) => {
  if (e.target.id === "cross") {
    closeAside();
  }
});
