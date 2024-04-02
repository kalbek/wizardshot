const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close");
const navigation = document.getElementById("navigation");
const loginSection = document.getElementById("login");
const loginText = document.getElementById("login-text");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  navigation.classList.toggle("hidden");
  // loginSection.classList.toggle("hidden");
  // hide download wizarshot and login sections
  loginSection.classList.remove("hidden");
  loginSection.classList.add("visible");
  // hide login text
  // loginText.classList.remove("invisible");
  // loginText.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  menuButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  navigation.classList.toggle("hidden");
  // loginSection.classList.toggle("hidden");
  // show download wizarshot and login sections
  loginSection.classList.remove("visible");
  loginSection.classList.add("hidden");
  // hide login text
  // loginText.classList.add("invisible");
  // loginText.classList.remove("visible");
});
