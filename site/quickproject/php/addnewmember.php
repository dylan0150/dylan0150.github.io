<?php
echo "Update in Progress...";

include "php/dbconnect.php";

$data=json_decode(file_get_contents("php://input"));

$id=$db_connect->real_escape_string($data->id);
$firstname=$db_connect->real_escape_string($data->firstname);
$lastname=$db_connect->real_escape_string($data->lastname);
$dob=$db_connect->real_escape_string($data->dob);
$bio=$db_connect->real_escape_string($data->bio);

$query="INSERT INTO members VALUES($id,'".$firstname."','".$lastname."','".$dob."','".$bio."')";

$db_connect->query($query);

echo "Complete";
?>
