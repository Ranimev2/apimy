<?php
// Koneksi ke database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Cek koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Proses login
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query untuk cek username dan password
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $query);

    // Cek hasil query
    if (mysqli_num_rows($result) > 0) {
        // Login berhasil, simpan session
        session_start();
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");
        exit;
    } else {
        // Login gagal, tampilkan pesan error
        $error = "Username atau password salah";
    }
}

// Tutup koneksi
mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
</head>
<body>
    <h1>Login Form</h1>
    <form method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Login">
        <?php if (isset($error)) { echo "<p>$error</p>"; } ?>
    </form>
</body>
</html>
