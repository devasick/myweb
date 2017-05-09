<?php
//change these values to whatever your own database server requires
$link = mysql_connect('localhost', 'asicvooj_web', 'test@123'); //Connects to the database at "localhost"
if(!$link) {
    //halt execution if cannot connect
    die("Cannot connect to the database!");
}
mysql_select_db('asicvooj_web', $link); //Assuming you have a database named "test" set up
?>