<?php
$phoneModal = $_POST['phoneModal'];
$inputName = $_POST['inputName'];
$messageBody = $_POST['messageBody'];

$to = "79269902226@ya.ru";
$subject = "Очень важное письмо";
$text = "$messageBody\n\nС уважением,\n$inputName\n$phoneModal\n";

$header .= "Content-type: text/html; charset=utf-8\r\n";
$header .= "MIME-Version: 1.0\r\n";
$verify = mail($to, $subject, $text, $headers);

if ($verify == 'true') {
	header("refresh:0;url=http://cepoeympo.github.io/");
	/*echo "<p>Сообщение отправлено!</p><p>Через 3 секунд Вы вернётесь назад</p><p> или нажмите на <a href='http://cepoeympo.github.io/'> эту ссылку</a></p><p>С уважением,</p><p>Андрей Максимович</p>";*/
}
