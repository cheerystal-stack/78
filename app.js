const oneCardBtn = document.getElementById("oneCardBtn");
const oneCardScreen = document.getElementById("oneCardScreen");
const backHome = document.getElementById("backHome");

oneCardBtn.addEventListener("click", () => {
  oneCardScreen.classList.add("active");
});

backHome.addEventListener("click", () => {
  oneCardScreen.classList.remove("active");
});
