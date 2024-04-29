<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate username and password (replace with your actual validation logic)
    if ($username === 'admin' && $password === 'admin123') {
        // Store username in session
        $_SESSION['username'] = $username;
        
        // Redirect to the existing HTML page
        header("Location: index.html");
        exit;
    } else {
        // Display an error message
        echo '<script>alert("Invalid username or password!")</script>';
    }
}
?>
