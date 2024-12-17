
/// Sample Product Data
const products = [
    { id: 1, name: "Product 1", price: "$20", description: "This is Product 1." },
    { id: 2, name: "Product 2", price: "$30", description: "This is Product 2." },
    { id: 3, name: "Product 3", price: "$40", description: "This is Product 3." },
  ];
  
  // Function to render product cards
  function renderProducts(productArray) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear existing content
  
    productArray.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      const productName = document.createElement("h2");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;
  
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("onclick", `deleteProduct(${product.id})`);
  
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDescription);
      productCard.appendChild(deleteButton);
  
      container.appendChild(productCard);
    });
  }
  
  // Function to delete a product
  function deleteProduct(id) {
    const updatedProducts = products.filter(product => product.id !== id);
    products.splice(0, products.length, ...updatedProducts); // Update original array
    renderProducts(products); // Re-render products
  }
  
  // Initial rendering of products
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
  });
  