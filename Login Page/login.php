<?php
    
    $user = $_GET["w1"];
    $pass = $_GET["w2"];
    $conn=mysqli_connect("localhost","root","","student grievance");
    $acn= mysqli_query($conn, "SELECT * FROM login1  where username = '".$user."' and pass = '".$pass."' ");
    $val=mysqli_fetch_row($acn);
    if($val[6]=='' || $val[6]!=$pass){
        echo "<script> alert('Invalid username or password');window.location='index.html' </script>";
    }
    else{
        header("location:index.html");
    }


?>