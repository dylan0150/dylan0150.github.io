<?php
include "connect_scrabble_db.php";

$data=json_decode(file_get_contents("php://input"));

$id = $conn->real_escape_string($data->id);
$p1id = $conn->real_escape_string($data->p1id);
$p2id = $conn->real_escape_string($data->p2id);
$p1score = $conn->real_escape_string($data->p1score);
$p2score = $conn->real_escape_string($data->p2score);
$date = $conn->real_escape_string($data->date);

$sql = "INSERT INTO `games` (`id`, `p1score`, `p2score`, `p1id`, `p2id`, `date`) VALUES ('$id', '$p1score', '$p2score', '$p1id', '$p2id', '$date');";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error description: " . mysqli_error($conn);
}

$conn->close();
?>
