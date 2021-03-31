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
        $to = new SendGrid\Email(null, "willamspinto18@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá Admin, <br><br>Nova mensagem de contato<br><br>Nome: $nome<br>Email: $email <br>Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = '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';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
