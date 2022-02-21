const floatingBtn = document.querySelector(".fabt");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    floatingBtn.classList.add("active");
  } else {
    floatingBtn.classList.remove("active");
  }
});

floatingBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
