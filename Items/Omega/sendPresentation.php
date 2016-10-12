<?php
		$txtname = trim($_POST['name']);
		$txtemail = trim($_POST['email']);
		$txtphone = trim($_POST['phone']);
		$txtmessage = trim($_POST['message']);
		
		// от кого
		 $fromMail = 'apkareal@ukr.net';
		 $fromName = 'OmegaContact';

		// Сюда введите Ваш email
		$emailTo = $txtemail;
		
		$subject = 'Презентация Omega Contact';
		//$subject .= '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <"."Omega"."> \r\n";

		// тело письма
		$body = "	<h1 >$txtname!</h1>\n
					<p style='font-size: 1em'> Представляем Вашему вниманию презентацию колл-центра Omega Contact.</p>\n
					<a href='https://www.youtube.com/watch?v=tJpbC5ZmZ-4'>Презентация</a>\n
					<p style='font-size: 1em'>Мы будем рады сотрудничеству с Вами</p>";
		
		$mail = mail($emailTo, $subject, $body, $headers);
		echo 'ok';
		echo $_POST;
?>