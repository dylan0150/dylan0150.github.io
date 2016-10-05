<?php
include "connect_scrabble_db.php";

$sql = "SELECT id,p1score,p2score,p1id,p2id,date FROM games";
$result = mysqli_query($conn, $sql) or die("Error 2");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"p1score":"'  . $rs["p1score"] . '",';
    $outp .= '"p2score":"'  . $rs["p2score"] . '",';
    $outp .= '"id":"'  . $rs["id"] . '",';
    $outp .= '"p1id":"'  . $rs["p1id"] . '",';
    $outp .= '"p2id":"'  . $rs["p2id"] . '",';
    $outp .= '"date":"'. $rs["date"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
