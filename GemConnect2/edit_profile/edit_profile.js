// Get the form element
const editProfileForm = document.getElementById('edit-profile-form');

// Add event listener for form submission
editProfileForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get the form inputs
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const contactInput = document.getElementById('contact');
  const profilePictureInput = document.getElementById('profile-picture');

  // Get the entered values
  const username = usernameInput.value;
  const email = emailInput.value;
  const contact = contactInput.value;
  const profilePicture = profilePictureInput.files[0];

  // Perform the necessary actions to update the user's details in the database
  // For example, you can make an AJAX request to a server-side script to handle the update

  // Reset the form inputs
  usernameInput.value = '';
  emailInput.value = '';
  contactInput.value = '';
  profilePictureInput.value = '';

  // Display a success message or redirect to another page
  alert('Profile updated successfully!');
});
