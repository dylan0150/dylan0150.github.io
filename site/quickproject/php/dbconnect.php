<?php
define("HOSTNAME","localhost");
define("USERNAME","root");
define("PASSWORD","");
define("DATABASE","scrabble_db");

$db_connect = new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE) or die("Unable to Connect");

?>
