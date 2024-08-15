<?php
// Cek apakah user telah login
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit;
}

// Tampilkan dashboard
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h1>Dashboard</h1>
    <p>Selamat datang, <?php echo $_SESSION['username']; ?>!</p>
    <p>Ini adalah halaman dashboard.</p>
    <ul>
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
    </ul>
    <p><a href="logout.php">Logout</a></p>
</body>
</html>
