// JavaScript file (e.g., hire-form-script.js)
function validateForm() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"][name="options"]:checked');
  
  if (checkboxes.length === 0) {
    alert("Please select at least one option!");
    return false;
  }

  // Add more validation logic if needed

  return true;
}
