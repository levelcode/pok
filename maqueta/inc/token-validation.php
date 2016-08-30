<?php
//Variable de token

    if (!isset($_GET['t'])){
        header("Location:  https://www.cervezapoker.com/sm_agegate?destination=external:https://campana.cervezapoker.com/");
        die();
    }else{
        $llave = base64_decode($key);
    }


?>  