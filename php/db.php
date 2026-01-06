<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_db"; // নিশ্চিত করুন এই নামে ডাটাবেজ তৈরি করেছেন

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>