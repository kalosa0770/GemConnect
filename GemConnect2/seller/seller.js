// seller.js

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the form inputs
    const gemstoneName = document.getElementById("gemstone-name").value;
    const gemstoneDescription = document.getElementById("gemstone-description").value;
    const gemstonePrice = document.getElementById("gemstone-price").value;
  
    // Create a new gemstone listing element
    const gemstoneListing = document.createElement("div");
    gemstoneListing.classList.add("gemstone-listing");
  
    const gemstoneImage = document.createElement("img");
    gemstoneImage.src = "placeholder.jpg";
    gemstoneImage.alt = gemstoneName;
  
    const gemstoneDetails = document.createElement("div");
    gemstoneDetails.classList.add("gemstone-details");
  
    const gemstoneTitle = document.createElement("h3");
    gemstoneTitle.textContent = gemstoneName;
  
    const gemstoneDesc = document.createElement("p");
    gemstoneDesc.textContent = gemstoneDescription;
  
    const gemstonePriceLabel = document.createElement("span");
    gemstonePriceLabel.classList.add("price-label");
    gemstonePriceLabel.textContent = "Price: ";
  
    const gemstonePriceValue = document.createElement("span");
    gemstonePriceValue.classList.add("price-value");
    gemstonePriceValue.textContent = gemstonePrice;
  
    gemstoneDetails.appendChild(gemstoneTitle);
    gemstoneDetails.appendChild(gemstoneDesc);
    gemstoneDetails.appendChild(gemstonePriceLabel);
    gemstoneDetails.appendChild(gemstonePriceValue);
  
    gemstoneListing.appendChild(gemstoneImage);
    gemstoneListing.appendChild(gemstoneDetails);
  
    // Append the gemstone listing to the gemstone list
    const gemstoneList = document.getElementById("gemstone-list");
    gemstoneList.appendChild(gemstoneListing);
  
    // Reset the form inputs
    document.getElementById("gemstone-name").value = "";
    document.getElementById("gemstone-description").value = "";
    document.getElementById("gemstone-price").value = "";
  }
  
  // Attach event listener to the form submit event
  const gemstoneForm = document.getElementById("gemstone-form");
  gemstoneForm.addEventListener("submit", handleFormSubmit);
  