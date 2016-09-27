<?php
include("conn_admin.php");

//Retorno Universal
function return_fn($salida_texto, $salida_arreglo)
{
	$salida = array(
		"salida_texto" => $salida_texto,
		"salida_arreglo" => $salida_arreglo
	);
	return json_encode($salida);
}

//Servicios Usuarios
function userService($service){
	global $ses;
	if($ses == true)
	{
		$service();
	}else{
		echo return_fn('acceso restringido',0);
	}
}
	


if(isset($_POST["s"]))
{
	$setVar = $_POST["s"];
	switch ($setVar) {
		case 0:
			//userService('agregarFila');
			agregarFila();
			break;
		case 1:
			//userService('guardarFila');
			guardarFila();
			break;
		default:
			echo return_fn('No servicio', 'null');
	}
}

function agregarFila()
{
	global $enlace;
	
	$tabla_temp = $_POST['tabla'];
	
	$vars_temp = "";
	$vals_temp = "";

	$control = "";

	$numItems = count($_POST)-2;
	$i = 0;
	foreach ($_POST as $key => $value){
		if($key == "tabla" || $key == "s"){
			$vars_temp .= "";
			$vals_temp .= "";
		}else{
			if(++$i === $numItems) {
				$vars_temp .= "$key";
				$vals_temp .= "'$value'";
			}else{
				$vars_temp .= "$key, ";
				$vals_temp .= "'$value', ";
			}
		}
		
	}
	$consulta_agregarFila_text = "INSERT INTO ".$tabla_temp."(".$vars_temp.") VALUES (".$vals_temp.")";
	
	$consulta_agregarFila = sprintf($consulta_agregarFila_text);
	$result_agregarFila = mysqli_query($enlace, $consulta_agregarFila) or die (return_fn("Consulta Invalida ".mysqli_error($enlace).'     '.$consulta_agregarFila_text,0));
	$id_last = mysqli_insert_id($enlace);
	if($result_agregarFila)
	{
		echo return_fn('Fila '.$id_last.' Agregada | '.$control.'',1);
	}else{
		echo return_fn('Fila NO Agregada', 0);
	}
}

function guardarFila(){
	global $enlace;
	
	$tabla_temp = $_POST['tabla'];
	$id_temp = $_POST['fb_id'];

	$consulta_fila = sprintf("SELECT ingresos FROM ".$tabla_temp." WHERE fb_id=%s", GetSQLValueString($id_temp, "text"));
	$result_fila = mysqli_query ($enlace, $consulta_fila) or die (return_fn("Consulta Invalida ".mysqli_error($enlace),0));
	$result_log_fetch_fila = mysqli_fetch_assoc($result_fila);
	$result_ingresos = $result_log_fetch_fila["ingresos"]+1;

	if(mysqli_num_rows($result_fila)!=0)
	{
		$consulta_guardarFila_text = "UPDATE ".$tabla_temp." SET ";
		$numItems = count($_POST)-2;
		$i = 0;
		foreach ($_POST as $key => $value){
			if($key == "tabla" || $key == "id" || $key == "s"){
				$consulta_guardarFila_text .= "";
			}else{
				if(++$i === $numItems) {
					$consulta_guardarFila_text .= " $key = '$value', ingresos = '$result_ingresos' ";
				}else{
					$consulta_guardarFila_text .= " `$key` = '$value', ";
				}
			}
		}
		$consulta_guardarFila_text .= "WHERE fb_id=".$id_temp;
		
		$consulta_guardarFila = sprintf($consulta_guardarFila_text);
		$result_guardarFila = mysqli_query($enlace, $consulta_guardarFila) or die (return_fn("Consulta Invalida ".mysqli_error($enlace).'     '.$consulta_guardarFila_text,0));
		
		if($result_guardarFila)
		{
			echo return_fn('Fila '.$id_temp.' Guardada', '');
		}else{
			echo return_fn('Fila '.$id_temp.' NO Guardada', 0);
		}
		
	}else{
		echo return_fn('No Data', '');
	}
}	
?>