// Retrieve stored products from localStorage, or initialize an empty array
var products = JSON.parse(localStorage.getItem("products")) || [];

// Display the stored products on page load
displayProducts();

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("productName").value;
    var price = parseFloat(document.getElementById("productPrice").value);
    var quantity = parseInt(document.getElementById("productQuantity").value);
    var description = document.getElementById("productDescription").value;
    var category = document.getElementById("productCategory").value;

    // Get the uploaded image file
    var fileInput = document.getElementById("productImage");
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        var image = reader.result;

        var product = {
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            image: image,
            category: category
        };

        // Add the new product to the products array
        products.push(product);

        // Store the updated products array in localStorage
        localStorage.setItem("products", JSON.stringify(products));

        // Display the updated products list
        displayProducts();

        // Clear the form
        clearForm();
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function displayProducts() {
    var productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear the existing list

    // Iterate through the```javascript
products.forEach(function(product) {
        var li = document.createElement("li");

        var image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.className = "product-image";
        li.appendChild(image);

        var productDetails = document.createElement("div");
        productDetails.className = "product-details";

        var name = document.createElement("h3");
        name.textContent = product.name;
        name.className = "product-name";
        productDetails.appendChild(name);

        var price = document.createElement("p");
        price.textContent = "Price: $" + product.price;
        price.className = "product-price";
        productDetails.appendChild(price);

        var quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + product.quantity;
        quantity.className = "product-quantity";
        productDetails.appendChild(quantity);

        var description = document.createElement("p");
        description.textContent = "Description: " + product.description;
        description.className = "product-description";
        productDetails.appendChild(description);

        var category = document.createElement("p");
        category.textContent = "Category: " + product.category;
        category.className = "product-category";
        productDetails.appendChild(category);

        li.appendChild(productDetails);

        productList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("previewImage").src = "";
}
