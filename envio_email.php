<?php

$email_destinatario = "mbcampolino@gmail.com.br";

$nome = $_POST["name"];
$email = $_POST["email"];
$titulo = 'Contato pelo Site CodeCampos sobre '.$_POST["department"];
$mensagem = $_POST["message"];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	
	if(empty($_POST["name"]))
	{
		echo '<script language="javascript">';
		echo 'alert("Please write your name")';
		echo '</script>';
		header('Refresh: 0; url=http://www.codecampos.com.br');
	}
	else
	{
		if (empty($_POST["message"]))
		{
			echo '<script language="javascript">';
			echo 'alert("Mensagem inválido.")';
			echo '</script>';
			header('Refresh: 0; url=http://www.codecampos.com.br');
		}
		else
		{
			$headers = "MIME-Version: 1.1\n";
			$headers .= "Content-type: text/plain; charset=UTF-8\n";
			$headers .= "From: $email\n"; // remetente
			$headers .= "Return-Path: $email\n"; // return-path
			$headers .= "Reply-To: $email\n"; // Endereço (devidamente validado) que o seu usuário informou no contato
			$envio = mail($email_destinatario, $titulo, "Email de ".$nome." do email ".$email." \n\n". $mensagem, $headers, "-f$email_destinatario");

			if($envio)
			{
			///alert "Mensagem enviada com sucesso." ;
			echo '<script language="javascript">';
			echo 'alert("Mensagem enviada com sucesso.")';
			echo '</script>';
			header('Refresh: 0; url=http://www.codecampos.com.br');
			}
		}
	}
}
else
{
	echo '<script language="javascript">';
	echo 'alert("Email inválido.")';
	echo '</script>';
	header('Refresh: 0; url=http://www.codecampos.com.br');
}



?>