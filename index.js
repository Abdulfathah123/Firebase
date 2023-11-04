const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const userInfoDiv = document.getElementById("user-info");
const userEmail = document.getElementById("user-email");

registerButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    alert("Registration successful");
  } catch (error) {
    alert(error.message);
  }
});


loginButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert("Login successful");
    displayUserInfo();
  } catch (error) {
    alert(error.message);
  }
});


logoutButton.addEventListener("click", () => {
  firebase.auth().signOut();
  location.reload(); 
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    displayUserInfo();
  }
});
function displayUserInfo() {
  const user = firebase.auth().currentUser;
  if (user) {
    userInfoDiv.style.display = "block";
    userEmail.textContent = user.email;
    logoutButton.style.display = "block";
  }
}
