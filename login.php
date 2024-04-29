<?php

// Sample user credentials (replace with your authentication logic)
$validUsername = "admin";
$validPassword = "password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check if credentials are valid
    if ($username == $validUsername && $password == $validPassword) {
        echo "<h2>Login successful</h2>";
        echo "<p>Welcome, $username!</p>";

        // Redirect to the home page after a brief delay
        echo <script>
                setTimeout(function(){
                    window.location.href = "index.html"; // Replace with the actual home page URL
                }, 2000); // Delay for 2 seconds
              </script>;
    } else {
        echo "<h2>Login failed</h2>";
        echo "<p>Invalid username or password.</p>";
    }
}

?>
