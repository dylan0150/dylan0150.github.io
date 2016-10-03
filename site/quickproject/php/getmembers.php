<?php
header("Content-Type: application/json; charset=ISO-8859-1");

$servername="";
$username="";
$password="";
$dbname="";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$rs = $conn->execute("SELECT FirstName, LastName, JoinDate, Age, Games FROM Members");

$outp = "";
while (!$rs->EOF) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"firstname":"'  . $rs["FirstName"] . '",';
    $outp .= '"lastname":"'   . $rs["LastName"]        . '",';
    $outp .= '"age":"'   . $rs["Age"]        . '",';
    $outp .= '"games":"'   . $rs["Games"]        . '",';
    $outp .= '"joindate":"'. $rs["JoinDate"]     . '"}';
    $rs->MoveNext();
}
$outp ='{"records":['.$outp.']}';

$conn->close();

echo ($outp);
?>
