// Get the necessary elements
const formOpenBtn = document.querySelector("#form_open");
const home = document.querySelector(".HOME");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelector(".pw_hide");

// Event listener to open the form
formOpenBtn.addEventListener("click", () => home.classList.add("show"));

// Event listener to close the form
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Additional event listeners for switching between login and signup forms
signupBtn.addEventListener("click", () => {
  formContainer.classList.add("signup_form_active");
  formContainer.classList.remove("login_form_active");
});

loginBtn.addEventListener("click", () => {
  formContainer.classList.remove("signup_form_active");
  formContainer.classList.add("login_form_active");
});
