<?php
// get the data from the POST message
$post_data = json_decode(file_get_contents('php://input'), true);
$data = $post_data['filedata'];
$subjet = $post_data['subject']
// generate a unique ID for the file, e.g., session-6feu833950202 
$file = uniqid("session-");
// the directory "data" must be writable by the server
$name = "data/{$subject}/{$file}.csv"; 
// write the file to disk
file_put_contents($name, $data);
?>