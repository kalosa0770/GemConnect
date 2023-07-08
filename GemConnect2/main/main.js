// script.js

// Logout functionality
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
    // Perform logout logic here
    // For demonstration purposes, we will simply redirect to a logout page
    window.location.href = '../home/home.html';
});
