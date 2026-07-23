const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginGuide = document.getElementById("oplysninger");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
  // Prevent the default submission of the form
  e.preventDefault();
  // Get the values input by the user in the form fields
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "kea" && password === "kea") {
    // If the credentials are valid, show an alert box and reload the page
    console.log("Velkommen i nettet.");
    window.location.href = 'index.html';
  } else {
    // Otherwise, make the login error message show (change its oppacity)
    loginErrorMsg.style.opacity = 1;
    loginGuide.style.opacity = 0;
  }
})