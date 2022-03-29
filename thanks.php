<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="thanks.css" media="screen" />
    <title>Thanks</title>
</head>
<body>
    <?php
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        echo  "<div class='title'><h1>Olá, ".$nome.". Sua inscrição foi confirmada!</h1><br><br><center><input type='button' value='Voltar' onClick='JavaScript: window.history.back();'></center></div>";
    ?>
</body>
</html>