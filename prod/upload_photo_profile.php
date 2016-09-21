<?php
		
	$profile_Image = $_POST['image_url'];
	$userImage = $_POST['id_user'].'.jpg'; // renaming image
	$path = 'profiles/';  // your saving path
	$ch = curl_init($profile_Image);
	$fp = fopen($path . $userImage, 'wb');
	curl_setopt($ch, CURLOPT_FILE, $fp);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	$result = curl_exec($ch);
	curl_close($ch);
	fclose($fp);

 ?>