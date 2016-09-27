<?php
header("Content-Type: text/html;charset=utf-8");
date_default_timezone_set('America/Bogota');
//Sesion
if(!isset($_SESSION["sesion"]))
{
session_start();
}
//variable de sesion global
$ses = false;
$admin_var = false;
//evaluo nombre script

//Evaluo Sesion
if(isset($_SESSION["sesion"]))
{
	$ses = $_SESSION["sesion"];
};

//valido seguridad
if($ses == false)
{
	//header("Location: http://datapola.com");
};

//DB connection
function conectar_base()
{
	$link = mysqli_connect("localhost","datapola_usr","a8iNdyVGMrEG","datapola_PRD"); 
	mysqli_query($link, "SET NAMES 'utf8'");
	return $link;
};

$enlace = conectar_base();

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
	$theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }
  $enlace = conectar_base();
  $theValue = function_exists("mysqli_real_escape_string") ? mysqli_real_escape_string($enlace,$theValue) : mysqli_escape_string($theValue);

  switch ($theType) {
	case "text":
	  $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	  break;    
	case "long":
	case "int":
	  $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	  break;
	case "double":
	  $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
	  break;
	case "date":
	  $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	  break;
	case "defined":
	  $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	  break;
  }
  return $theValue;
}
?>
