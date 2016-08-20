<?php
  if ( isset($_FILES["foto"]) && !empty($_FILES["foto"]) ) {
    // Generate a random name
    $name= 'uploads/'.rand(1000000, 2000000).'.jpg';
    // Save the file to the server
    move_uploaded_file($_FILES["foto"]['tmp_name'], $name);
    // Return the name
    echo $name;
  }
 ?>