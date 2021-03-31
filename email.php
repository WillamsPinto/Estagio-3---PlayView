<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$mensagem = $_POST['mensagem'];
		
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "willamspinto18@gmail.com");
        $subject = "Mensagem de contato";
        $to = new SendGrid\Email(null, "arianny995@uorak.com");
        $content = new SendGrid\Content("text/html", "Olá Cesar, <br><br>Nova mensagem de contato<br><br>Nome: $nome<br>Email: $email <br>Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        $key      = parse_ini_file('sendgrid.ini')['key'];
        $sendgrid = new \SendGrid($key);

        $response = $sendgrid->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
