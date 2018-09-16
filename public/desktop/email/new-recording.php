<?php
if ($_POST) {


	//Variables Passed

	$Message = $_POST['Device'];
	$currentDate = date("Y/m/d");

	


	//format for writting data to file
	$add = "\n" . 

		$Device . "," .
		$currentDate . ",";



	$msg = 


		"<html><body>" . 
		"<h3>There's a New Recording!</h3>" . 
		"</html></body>";






	$open = fopen('recordings.csv', 'a'); //opens or creates (if it doesn't already exist) our text file (emails.txt) for writing (not reading) and places the pointer at the end.
	$write = fwrite($open, $add); //writes to our specified file our string

	


	if($write) { 

		$from         = "contact.form@smt.design";// this is the sender's Email address
		$to           = "hello@smt.design"; // this is the user's Email address
		$subject      = "**NEW Recording Waiting**";

		$headers = 'From: '.$from."\r\n".
		'Reply-To: do-not-reply@smt.design'."\r\n".
		'X-Mailer: PHP/'.phpversion()."\r\n".
		"MIME-Version: 1.0"."\r\n".
		"Content-type: text/html; charset=\"iso-8859-1";
		//mail($to, $subject, $emailmessage, $headers)
		if (mail($to, $subject, $msg, $headers)) {

			$output = json_encode(array('type' => 'success', 'text' => 'hello'));

			
			die($output);


		} else {

			$output = json_encode(array('type' => 'error-mail', 'text' => 'email'));
			
			die($output);

		}




		



	} else { 
		echo "Ops! Something went wrong."; 

	}



}
?>