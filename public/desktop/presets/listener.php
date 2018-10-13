<?php
	use PHPMailer\PHPMailer\PHPMailer;
	require "PHPMailer/PHPMailer.php";
	require "PHPMailer/Exception.php";

	if ($_SERVER['REQUEST_METHOD'] != 'POST') {
		header('Location: index.php');
		exit();
	}

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, "cmd=_notify-validate&" . http_build_query($_POST));
	$response = curl_exec($ch);
	curl_close($ch);

	if ($response == "VERIFIED" && $_POST['receiver_email'] == "hello@smt.design") {
		$cEmail = $_POST['payer_email'];
		$name = $_POST['first_name'] . " " . $_POST['last_name'];

		$price = $_POST['mc_gross'];
		$currency = $_POST['mc_currency'];
		$item = $_POST['item_number'];
		$paymentStatus = $_POST['payment_status'];

		if ($item == "2018LightroomPresets" && $currency == "USD" && $paymentStatus == "Completed" && $price == 14.99) {
			$mail = new PHPMailer();

			$mail->setFrom("service@smt.design", "Sales");
			$mail->AddReplyTo("service@smt.design", "Sales");
			$mail->addAttachment("attachment/2018presets.zip", "2018 Presets Pack");
			$mail->addAddress($cEmail, $name);
			$mail->isHTML(true);
			$mail->Subject = "Your Purchase Details";
			$mail->Body = "
				Hi, <br><br>
				Thank you for purchase. In the attachment you will find my
				2018 Lightroom Presets Pack!<br><br>
				
				Kind regards,
				Stephen Mark Toms
			";

			$mail->send();
		}
	}














?>
