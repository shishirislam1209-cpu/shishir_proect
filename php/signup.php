<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $email = $_POST['email'];
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT); // পাসওয়ার্ড এনক্রিপশন

    $sql = "INSERT INTO users (username, email, password) VALUES ('$user', '$email', '$pass')";

    if (mysqli_query($conn, $sql)) {
        echo "Registration successful!";
        header("Location: login.html"); // সফল হলে লগইন পেজে নিয়ে যাবে
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>