<?php

if(isset($_POST['submit'])){
    $to = "echo.zheng@mail.utoronto.ca";
    $subject = "My subject";
    $headers = "Hello world!";


    $msg = 'Name: ' .$_POST['name'] ."\n"
        .'Email: ' .$_POST['email'] ."\n"
        .'Phone: ' .$_POST['phone'] ."\n"
        .'Message: ' .$_POST['message'];

$go =   mail($to, $subject,  $msg, $headers);


    if(!$go) {   
        echo "Something went wrong.";// error
        } else {
        echo "Message was send";// correct

        }
} 
?>