$(document).ready(function () {
    // Check if the product structure has been updated
    var isProductStructureUpdated = localStorage.getItem('isProductStructureUpdated') === 'true';

    // If the product structure is not updated, clear localStorage
    if (!isProductStructureUpdated) {
        localStorage.clear();
        localStorage.setItem('isProductStructureUpdated', 'true');
    }

    // Initial load
    loadDefaultContent();

    // Add Product button click event
    $("#btnAddProduct").click(function () {
        loadAddProductForm();
    });

    // View Inventory button click event
    $("#btnViewInventory").click(function () {
        loadInventoryTable();
    });
});

function loadDefaultContent() {
    $("#content").html("<p>Welcome to Ration Shop Management System!</p>");
}

function loadAddProductForm() {
    $("#content").html(`
        <div class="container">
            <h2>Add Product</h2>
            <form id="addProductForm">
                <div class="form-group">
                    <label for="productName">Product Name:</label>
                    <input type="text" class="form-control" id="productName" name="productName" required>
                </div>
                <div class="form-group">
                    <label for="quantity">Quantity:</label>
                    <input type="number" class="form-control" id="quantity" name="quantity" required>
                </div>
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="text" class="form-control" id="price" name="price" required>
                </div>
                <div class="form-group">
                    <label for="date">Date:</label>
                    <input type="date" class="form-control" id="date" name="date" required>
                </div>
                <div class="form-group">
                    <label for="supplier">Supplier:</label>
                    <input type="text" class="form-control" id="supplier" name="supplier" required>
                </div>
                <div class="form-group">
                    <label for="receiptNumber">Receipt Number:</label>
                    <input type="text" class="form-control" id="receiptNumber" name="receiptNumber" required>
                </div>
                <button type="button" class="btn btn-primary" id="btnSubmitProduct">Add Product</button>
            </form>
        </div>
    `);

    $("#btnSubmitProduct").click(function () {
        // Retrieve values from the form
        var productName = $("#productName").val();
        var quantity = $("#quantity").val();
        var price = $("#price").val();
        var date = $("#date").val();
        var supplier = $("#supplier").val();
        var receiptNumber = $("#receiptNumber").val();

        // Add the product to the array
        var product = {
            productName: productName,
            quantity: quantity,
            price: price,
            date: date,
            supplier: supplier,
            receiptNumber: receiptNumber
        };
        // Retrieve the existing products from localStorage
        var products = JSON.parse(localStorage.getItem('products')) || [];

        // Add the new product to the array
        products.push(product);

        // Save the updated products array to localStorage
        localStorage.setItem('products', JSON.stringify(products));

        alert("Product added successfully!");

        // Load the inventory table with the updated products
        loadInventoryTable(products);

        // Clear the form
        $("#productName, #quantity, #price, #date, #supplier, #receiptNumber").val("");
    });
}

function loadInventoryTable(products) {
    products = products || [];
    $("#content").html(""); // Clear the content first

    var tableHtml = "<div class='container'><h2>Inventory</h2><table class='table table-striped'><thead><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Date</th><th>Supplier</th><th>Receipt Number</th></tr></thead><tbody>";

    for (var i = 0; i < products.length; i++) {
        tableHtml += `<tr><td>${products[i].productName}</td><td>${products[i].quantity}</td><td>${products[i].price}</td><td>${products[i].date}</td><td>${products[i].supplier}</td><td>${products[i].receiptNumber}</td></tr>`;
    }

    tableHtml += "</tbody></table></div>";
    $("#content").html(tableHtml);
}
