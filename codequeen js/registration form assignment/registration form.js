document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  let isValid = true; // checks conditions set for the input are met 

  // Get form values
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Reset error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input").forEach(el => el.classList.remove("error-border"));

  // Validate Full Name
  if (fullname.value.trim() === "") {
    setError(fullname, "Full name required");
    isValid = false;
  }

  // Validate Email
  if (email.value.trim() === "") {
    setError(email, "Email required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, "Enter a valid email");
    isValid = false;
  }

  // Validate Username
  if (username.value.trim() === "") {
    setError(username, "Username required");
    isValid = false;
  }

  // Validate Password
  if (password.value.length < 8) {
    setError(password, "Password must be at least 8 characters");
    isValid = false;
  }

  // Validate Confirm Password
  if (confirmPassword.value !== password.value) {
    setError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    console.log("Form submitted successfully!");
    console.log({
      fullname: fullname.value,
      email: email.value,
      username: username.value,
      password: password.value
    });

    alert("Registration successful!");
    this.reset();
  }
});

// Helper: show error when someone puts diiferent things in the input field
function setError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.textContent = message;
  input.classList.add("error-border");
}


// Toggle show/hide password
document.getElementById("showPassword").addEventListener("change", function() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const type = this.checked ? "text" : "password";
  password.type = type;
  confirmPassword.type = type;
});

//tracking changes in input fields
["fullname", "email", "username", "password", "confirmPassword"].forEach(id => {
  document.getElementById(id).addEventListener("input", function() {
    console.log(`${id}:`, this.value);
  });

});
