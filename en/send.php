<?php
$phoneModal = $_POST['phoneModal'];
$inputName = $_POST['inputName'];
$messageBody = $_POST['messageBody'];

$to = "79269902226@ya.ru";
$subject = "Very important letter";
$text = "$messageBody\n\nBest regards\n$inputName\n$phoneModal\n";

$header .= "Content-type: text/html; charset=utf-8\r\n";
$header .= "MIME-Version: 1.0\r\n";
$verify = mail($to, $subject, $text, $headers);

if ($verify == 'true') {
	header("refresh:0;url=http://cepoeympo.github.io/");
	/*echo "<p>The message is sent!</p><p>In 3 seconds, You'll be back</p><p> or click on <a href='http://cepoeympo.github.io/'> this link</a></p><p>Best regards,</p><p>Andrey Maksimovich</p>";*/
}
