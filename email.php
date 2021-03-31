<?php

if(isset($_POST(['email'])) && (!empty($_POST(['email'])))){

$nome = addslashes($_POST(['nome']));
$email = addslashes($_POST(['email']));
$mensagem = addslashes($_POST(['mensagem']));

$to = "willamspinto18@gmail.com";
$subject = "Contato - PlayView";
$body = "Nome: ".$nome. "\r\n"
        "E-mail: ".$email. "\r\n"
        "Mensagem: ".$mensagem;

$header = "From: leia7654@uorak.com"."\r\n"."Reply-to:".$email."\r\n"."X=Mailer:PHP/".phpversion();


if(mail($to, $subject, $body, $header)){
    echo("E-mail enviado com sucesso");

}else{
    echo("E-mail não pode ser enviado");
}


}

?>