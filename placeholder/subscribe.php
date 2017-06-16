<?php 
if(isset($_POST['email']) && !empty($_POST['email'])) {
	$handle = fopen("asf234FAf13f.txt", "a");
	fwrite($handle, PHP_EOL . $_POST['email']);
	fclose($handle);
}
?>