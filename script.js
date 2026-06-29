const correctPassword = "flint2026";
const loginScreen = document.getElementById("loginScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const passwordInput = document.getElementById("passwordInput");
const loginError = document.getElementById("loginError");

function showDashboard() {
  loginScreen.classList.add("hidden");
  dashboardScreen.classList.remove("hidden");
  sessionStorage.setItem("flintLoggedIn", "true");
}

function login() {
  if (passwordInput.value === correctPassword) {
    showDashboard();
  } else {
    loginError.textContent = "Wrong password, try again.";
  }
}

document.getElementById("loginButton").addEventListener("click", login);
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") login();
});

document.getElementById("logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem("flintLoggedIn");
  dashboardScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  passwordInput.value = "";
});

if (sessionStorage.getItem("flintLoggedIn") === "true") showDashboard();
