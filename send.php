<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$newsletter = $_POST['newsletter'];
$email = $_POST['email'];

if(isset($name) & isset($phone) & isset($email)& isset($message)) {
    $title = "Booking in Best Tour Plan";
$body = "
<h2>Booking</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br>
<b>Сообщение:</b> $message<br>";
}

else if(isset($name) & isset($phone) & isset($message)) {
    $title = "Footer in Best Tour Plan";
$body = "
<h2>Send us a message</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b> $message<br>";
}

else if(isset($newsletter)) {
$title = "Newsletter in Best Tour Plan";
$body = "
<h2>Newsletter</h2>
<b>Подписка на новости:</b> $newsletter<br>";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'aivengocorp@gmail.com'; // Логин на почте
    $mail->Password   = 'YR5-2Et-yvP-fQ6'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aivengocorp@gmail.com', 'Александр Айвенго'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('aivengoalek@yandex.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
