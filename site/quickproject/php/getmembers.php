<?php
include "connect_scrabble_db.php";

$sql = "SELECT id,firstname,lastname,joindate,dob,bio FROM members";
$result = mysqli_query($conn, $sql) or die("Error 2");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"firstname":"'  . $rs["firstname"] . '",';
    $outp .= '"id":"'  . $rs["id"] . '",';
    $outp .= '"dob":"'  . $rs["dob"] . '",';
    $outp .= '"joindate":"'  . $rs["joindate"] . '",';
    $outp .= '"bio":"'  . $rs["bio"] . '",';
    $outp .= '"lastname":"'. $rs["lastname"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
