<?php
include "connect_scrabble_db.php";

$data=json_decode(file_get_contents("php://input"));

$id = $conn->real_escape_string($data->id);
$firstname = $conn->real_escape_string($data->firstname);
$lastname = $conn->real_escape_string($data->lastname);
$dob = $conn->real_escape_string($data->dob);
$bio = $conn->real_escape_string($data->bio);
$joindate = date("Y-m-d");

$sql = "INSERT INTO `members` (`id`, `firstname`, `lastname`, `joindate`, `dob`, `bio`) VALUES ('$id', '$firstname', '$lastname', '$joindate', '$dob', '$bio');";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error description: " . mysqli_error($conn);
}

$conn->close();
?>
