
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/script.js"> </script>
</head>
<body>
    <?php

    $Pagina = "Registro de Servicios";
    $Curso = "Ambiente Web Cliente Servidor"; 
    $Caso = "Caso de estudio #1";
    $Descripcion = "Esta pagina permitira registrar un nuevo estudiante para que pueda ofrecer sus servicios!";

    echo "<h1>" . $Pagina . "</h1>";
    echo "<p>" . $Curso . "</p>";
    echo "<p>" . $Caso . "</p>";
    echo "<p>" . $Descripcion . "</p>";
    ?>
     <form id="formulario">
        <ul>
            <li>
                <label for="Nombre">Ingrese el nombre del estudiante: </label>
                <input type="text" id="nombreform" name="nombreform">
            </li>
            <li>
                <label for="Servicio">Ingrese una breve descripcion del servicio: </label>
                <input type="text" id="servicioform" name="servicioform">
            </li>
            <li>
                <label for="Precio">Ingrese el precio que tendra este servicio: </label>
                <input type="text" id="precioform" name="precioform">
            </li>

            <li class="button">
                <button type="submit">Enviar</button>
                 <button type="reset" onclick="limpiar()">Limpiar</button>
            </li>
            </ul>            
    </form>
    <div class = "botones">
    <button id="button1" type="button" onclick="window.location.href='index.html'">Inicio</button>
    <button id="button1" type="button" onclick="window.location.href='servicios.html'">Servicios</button>
    <button id="button1" type="button">Contactos</button>
    </div>
</body>
</html>