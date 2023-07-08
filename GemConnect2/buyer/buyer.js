// buyer.js

// Function to handle the "Buy Now" button click
function handleBuyNow() {
    alert("Thank you for your purchase!");
  }
  
  // Get all the "Buy Now" buttons
  const buyNowButtons = document.querySelectorAll(".product a");
  
  // Attach a click event listener to each "Buy Now" button
  buyNowButtons.forEach(button => {
    button.addEventListener("click", handleBuyNow);
  });
  