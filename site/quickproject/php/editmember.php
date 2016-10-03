<?php
header("Content-Type: application/json; charset=ISO-8859-1");

$servername="";
$username="";
$password="";
$dbname="Members";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$rs = $conn->execute("UPDATE Members SET FirstName, LastName, JoinDate, Age, Games WHERE ID");



$conn->close();

echo ($outp);
?>
