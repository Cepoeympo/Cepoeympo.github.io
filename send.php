<?php
if (isset($_POST['inputName'])) {
	$inputName = $_POST['inputName'];
}
if (isset($_POST['$phoneModal'])) {
	$phoneModal = $_POST['$phoneModal'];
}
if (isset($_POST['$messageBody'])) {
	$messageBody = $_POST['$messageBody'];
}

$inputName = stripslashes($inputName);
$inputName = htmlspecialchars($inputName);

$phoneModal = stripslashes($phoneModal);
$phoneModal = htmlspecialchars($phoneModal);

$messageBody = stripslashes($messageBody);
$messageBody = htmlspecialchars($messageBody);

$address = "dakine13@ya.ru";

$message = "" . $messageBody . "\nС уважением, " . $inputName . "\nМой контактный e-mail: " . $phoneModal . "";

$verify = mail($address, $message, "Content-type:text/plain; Charset=UTF-8");


if ($verify == 'true') {
	//echo "Письмо отправлено. Ответа не ждите :)";
	header("Location: тут путь, куда перенаправлять");
}

/*
if ($verify == 'true') {
	echo "
<link rel='stylesheet' type='text/css' href='style.css'/>
<table width='600' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>

 <!-- <img align='center' src='img/warning.png'> -->
 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font'>Ваше письмо доставлено администратору. Через некоторое время Вы получите ответ!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>

 </td>
 </tr>
 </table>";
} else {
	echo "
<link rel='stylesheet' type='text/css' href='style.css'/>
<table width='600' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>

 <!-- <img align='center' src='img/warning.png'> -->
 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>

 </td>
 </tr>
 </table>";
}
*/