function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitHireForm() {

  var name = document.getElementById("hireName").value;
  var email = document.getElementById("hireEmail").value;

  // Validate 
  if (name.trim() === '' || email.trim() === '') {
    alert("Please fill out Name and Email before submitting.");
    return;
  }

  // Validate checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checked = false;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    alert('Please select an option');
    return;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email");
    return; 
  }

  // Show success  
  document.getElementById("hireForm").style.display = "none";
  document.getElementById("hireSuccessMessage").style.display = "block";

}

// Form reference
const form = document.getElementById('hireForm');

// H2 element
const header = document.querySelector('.hey-text'); 

// Original and success text
const originalText = header.innerHTML;
const successText = 'Thank you! Your request has been received.';

// Form submit handler
form.addEventListener('submit', e => {

  e.preventDefault();

  // Validate
  if (isValid()) {
    
    // Hide form, show success
    form.style.display = 'none';
    header.innerHTML = successText;

  } else {

    alert('Please fill out correctly');

  }

});

// Validation 
function isValid() {

  var name = document.getElementById("hireName").value;
  var email = document.getElementById("hireEmail").value;

  if (name.trim() === '' || email.trim() === '') {
    alert("Please fill out Name and Email before submitting.");
    return false;
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checked = false;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;  
    }
  }

  if (!checked) {
    alert('Please select an option');
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email");
    return false;
  }

  return true;

}