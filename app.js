const homeScreen = document.getElementById("homeScreen");
const oneCardBtn = document.getElementById("oneCardBtn");
const oneCardScreen = document.getElementById("oneCardScreen");
const backHome = document.getElementById("backHome");

oneCardBtn.addEventListener("click", () => {
  homeScreen.classList.add("home-hidden");
  oneCardScreen.classList.add("active");

  window.scrollTo(0, 0);
});

backHome.addEventListener("click", () => {
  oneCardScreen.classList.remove("active");
  homeScreen.classList.remove("home-hidden");

  window.scrollTo(0, 0);
});
