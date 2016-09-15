<?php
  if ( isset($_FILES["foto"]) && !empty($_FILES["foto"]) ) {
    //Namefile
    $name_file = $_POST['name_file'];

    // Generate a random name
    $name= 'uploads/'.$name_file.'.jpg';
    // Save the file to the server
    move_uploaded_file($_FILES["foto"]['tmp_name'], $name);
    // Return the name
    echo $name;
  }
 ?>