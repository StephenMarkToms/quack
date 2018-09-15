<?php
if ($_POST) {


	//Variables Passed

	$Device = $_POST['Device']; 
	$Name = $_POST['Name']; 
	$Shoot = $_POST['Shoot']; 
	$Phone = $_POST['Phone']; 
	$Email = $_POST['Email']; 
	$Message = $_POST['Message']; 
	

	


	//format for writting data to file
	$add = "\n" . 

		$Device . "," .
		$Name . "," .
		$Shoot . "," . 
		$Phone . "," .
		$Email . "," . 
		$Message . ",";



	$msg = 


		"<html><body>" . 
		"<h3>New Contact Email</h3>" . 
		"<br>" . "Device: " . "&nbsp;&nbsp;". $Device . 
		"<br>" . "Name: " . "&nbsp;&nbsp;". $Name . 
		"<br>" . "Shoot: " . "&nbsp;&nbsp;". $Shoot . "\n" .
		"<br>" . "Phone: " . "&nbsp;&nbsp;". $Phone . 
		"<br>" . "Email: " . "&nbsp;&nbsp;". $Email .
		"<br>" . "Message: " . 
		"<br>" . $Message .
		"</html></body>";






	$open = fopen('contacts.csv', 'a'); //opens or creates (if it doesn't already exist) our text file (emails.txt) for writing (not reading) and places the pointer at the end.
	$write = fwrite($open, $add); //writes to our specified file our string

	


	if($write) { 

		//mail("stoms@getrenegade.com", "New Client Form Submission", $msg);

		$from         = "contact.form@smt.design";// this is the sender's Email address
		$to           = "hello@smt.design"; // this is the user's Email address
		$subject      = "**NEW Contact Email**";

		$headers = 'From: '.$from."\r\n".
		'Reply-To: do-not-reply@smt.design'."\r\n".
		'X-Mailer: PHP/'.phpversion()."\r\n".
		"MIME-Version: 1.0"."\r\n".
		"Content-type: text/html; charset=\"iso-8859-1";
		//mail($to, $subject, $emailmessage, $headers)
		if (mail($to, $subject, $msg, $headers)) {

			$output = json_encode(array('type' => 'success', 'text' => 'hello'));

			// header("Location: https://renegadecommunications.com/new-clients-form/thanks", true, 301);

			die($output);


		} else {

			$output = json_encode(array('type' => 'error-mail', 'text' => 'email'));
			
			// header("Location: https://renegadecommunications.com/new-clients-form/thanks", true, 301);

			die($output);

		}




		



	} else { 
		echo "Ops! Something went wrong."; 

	}



}
?>