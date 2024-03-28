const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close");
const navigation = document.getElementById("navigation");
const loginSection = document.getElementById("login");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  loginSection.classList.toggle("hidden");
  navigation.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  menuButton.classList.toggle("hidden");
  loginSection.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  navigation.classList.toggle("hidden");
});
