<?php
if(isset($_REQUEST["file"]))
{
$filename = $_REQUEST["file"];
$newName = $_REQUEST["name"];

$file_extension = strtolower(substr(strrchr($filename, "."), 1));

if ($filename == "") {
echo "<html><title>Download</title><body>No filename given.</body></html>";
exit();
} elseif (!file_exists($filename)) {
echo "<html><title>Download</title><body>File not found.</body></html>";
exit();
}

switch ($file_extension) {
case "pdf":
$contenttype = "application/pdf";
break;
case "jpg":
$contenttype = "image/jpg";
break;
}

header("Content-Type: " . $contenttype);
header("Content-Disposition: attachment; filename=\"" .$newName. ".jpg\";");
readfile($filename);
exit();
}
?>