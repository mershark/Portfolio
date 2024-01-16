// form-script.js

function submitForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate if fields are not empty
  if (fullName.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Validate email format
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  document.getElementById("contactForm").style.display = "none";
  document.getElementById("successMessage").style.display = "block";
}

// Function to validate email format
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
