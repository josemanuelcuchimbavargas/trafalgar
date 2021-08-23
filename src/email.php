<?php

use PHPMailer\PHPMailer;

$data = json_decode(file_get_contents("php://input"), true);

$name = "Correo de Contacto";
$email = "josemanuel@soho.cl";
$subject = "Quiero saber mas";

$body = '<ul>
<li>Nombre: '. $data["nombre"] .'</li>
<li>Email: '. $data["email"] .'</li>
<li>Télefono: '. $data["telefono"] .'</li>
<li>Razón: '. $data["razon"] .'</li>
<li>Comentario: '. $data["comentario"] .'</li>
</ul>';

require_once "PHPMailer.php";
require_once "SMTP.php";
require_once "Exception.php";

$mail = new PHPMailer\PHPMailer();

$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Username = "josemanuelcuchimbavargas@gmail.com";
$mail->Password = "0124578qaZ....";
$mail->Port = 465;
$mail->SMTPSecure = "ssl";

$mail->isHTML(true);
$mail->setFrom($email, $name);
$mail->addAddress("josemanuelcuchimbavargas@gmail.com");
$mail->Subject = ("$subject");
$mail->Body = $body;

if($mail->send()){
    $status = "success";
}
else {
    $status = "failed";
}

?>