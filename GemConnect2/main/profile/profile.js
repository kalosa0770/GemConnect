// profile.js
$(document).ready(() => {
    const profileForm = $('#profileForm');
  
    // Fetch and display user profile data
    const fetchUserProfile = () => {
      $.get('/api/user', (user) => {
        profileForm.find('[name="username"]').val(user.username);
        profileForm.find('[name="email"]').val(user.email);
        profileForm.find('[name="contact"]').val(user.contact);
      });
    };
  
    fetchUserProfile();
  
    // Handle profile picture upload
    profileForm.on('submit', (e) => {
      e.preventDefault();
  
      const formData = new FormData(profileForm[0]);
      $.ajax({
        url: '/api/user',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: () => {
          alert('Profile updated successfully');
        },
        error: () => {
          alert('Failed to update profile');
        },
      });
    });
  });
  