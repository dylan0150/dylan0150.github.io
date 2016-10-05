<?php
include "connect_scrabble_db.php";

$sql = "CREATE TABLE `scrabble_db`.`members` ( `id` INT NOT NULL , `firstname` TEXT NOT NULL , `lastname` TEXT NOT NULL , `joindate` DATE NOT NULL , `dob` DATE NOT NULL , `bio` TEXT NOT NULL ) ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "members table created successfully";
} else {
    echo "Error description: " . mysqli_error($conn);
}

$conn->close();
?>
