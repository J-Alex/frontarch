<?php
	$objDatos = json_decode(file_get_contents("php://input"));

	$name = @trim(stripslashes($objDatos->name));
	$email = @trim(stripslashes($objDatos->correo));
	$phone = @trim(stripslashes($objDatos->telefono));
	$tiempo = @trim(stripslashes($objDatos->tiempo));
	$message = @trim(stripslashes($objDatos->descripcion));
	$service= @trim(stripslashes($objDatos->tituloModal));


require 'class.phpmailer.php';
$mail=new PHPMailer();
$mail->CharSet = 'UTF-8';

//$body = 'Correo: '.$email.' Empresa:  '.$phone.' Mensaje:  '.$message;

$body = <<<EOT
Correo: $email \n-------------------------------------------\n
Teléfono: $phone\n-------------------------------------------\n

Servicio: $service\n-------------------------------------------\n
Entrega: $tiempo\n-------------------------------------------\n


\n
$message
EOT;

$mail->IsSMTP();
$mail->Host       = 'smtp.gmail.com';

$mail->SMTPSecure = 'tls';
$mail->Port       = 587;
$mail->SMTPDebug  = 1;
$mail->SMTPAuth   = true;

$mail->Username   = 'bmarkt.studio@gmail.com';
$mail->Password   = 'bmarkt162216';

$mail->SetFrom($email, $name);
$mail->AddReplyTo('bmarkt.studio@gmail.com','no-reply');
$mail->Subject    = 'Contacto desde sitio web';
$mail->MsgHTML($body);

$mail->AddAddress('heraldflores95@gmail.com', 'Herald');
/* $mail->AddAddress('brjosue73@gmail.com', 'Brandon');
$mail->AddAddress('marvingutierrezjr@gmail.com', 'Marvin');
$mail->AddAddress('jenniercruz90@gmail.com', 'Jennier');
$mail->AddAddress('contacto@bmarkt.studio', 'Bmarkt');
$mail->AddAddress('duviedh22@gmail.com', 'Jerson');
$mail->AddAddress('bahrdiseno@gmail.com', 'Byron'); */


if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
		echo 'Message has been sent';
}

?>
