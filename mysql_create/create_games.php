<?php
include "connect_scrabble_db.php";

$sql = "CREATE TABLE `scrabble_db`.`games` ( `id` INT NOT NULL , `p1id` INT NOT NULL , `p2id` INT NOT NULL , `p1score` INT NOT NULL , `p2score` INT NOT NULL , `date` DATE NOT NULL ) ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "games table created successfully";
} else {
    echo "Error description: " . mysqli_error($conn);
}

$conn->close();
?>
