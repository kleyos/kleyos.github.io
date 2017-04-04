<?php
		$txtname = trim($_POST['name']);
		$txtemail = trim($_POST['email']);
		$txtphone = trim($_POST['phone']);
		$txtmessage = trim($_POST['message']);

		// от кого
		 $fromMail = 'apkareal@ukr.net';
		 $fromName = 'OmegaContact';

		// Сюда введите Ваш email
		//$emailTo = 'valdizzz1983@gmail.com';
		$emailTo = 'olga.erushenko@gmail.com';
		
		$subject = 'Обратный звонок';
		//$subject .= '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $txtphone ."> \r\n";

		// тело письма
		$body = "Получено сообщение с сайта Omega http://kley.ho.ua/Omega/index.html\n\nИмя: $txtname\nТелефон: $txtphone\nE-mail: $txtemail\nТекст сообщения: $txtmessage";
		$mail = mail($emailTo, $subject, $body, $headers);
		echo 'ok';
		echo $_POST;
?>