<?php
    session_start();
    error_reporting(0);
    ini_set('display_error',0);
    $fname = $lname = $mname = $mobo = $email = $college = $username = $pass = $confpass = $dob = "";
    $conn=mysqli_connect("localhost","root","","student grievance");
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $fname = $_POST["fname"];
        $lname = $_POST["lname"];
        $mname = $_POST["mname"];
        $mobo = $_POST["phone_number"];
        $email = $_POST["email"];
        $dob = $_POST["dob"];        
        $username = $_POST["uname"];
        $pass = $_POST["pass"];
        $cpass = $_POST["cpass"];
        $college = $_POST["college"];
        if($pass==$cpass){
            $pass=hash('sha1',$pass);
            $sql="INSERT into login1 values('$fname','$mname','$lname','$college','$email','$username','$pass','$mobo','$dob')";
            $result=$conn->query($sql);
            header("location:index.html");
        }
        else{
            echo "<script> alert('Invalid username or password');window.location='Registration.php'</script>" ;

        }
             
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="css/style2.css">
</head>
<body>

    <div class="main">

        <div class="container">
            <form method="POST" class="appointment-form" id="appointment-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" >
                <h2>Register</h2>
                <div class="form-group-1">
                    <input type="text" name="fname" id="fname" placeholder="First Name" required />
                    <input type="text" name="mname" id="mname" placeholder="Middle Name" required />
                    <input type="text" name="lname" id="lname" placeholder="Last Name" required />
                    <input type="email" name="email" id="email" placeholder="Email" required />
                    <input type="number" name="phone_number" id="phone_number" placeholder="Phone number" required />
                    <input class="input--style-4 js-datepicker" type="text" name="dob" id="dob" placeholder="Date Of Birth (DD/MM/YYYY)">
                    <input type="text" name="uname" id="uname" placeholder="Username" required />
                    <input type="password" name="pass" id="pass" placeholder="Password" required />
                    <input type="password" name="cpass" id="cpass" placeholder="Confirm Password" required />

                    <div class="select-list">
                        <select name="college" id="college">
                            <option slected value="">Select College</option>
                            <option value="SAKEC">Shah and Anchor Kutcchi Engineering College</option>
                            <option value="VIT">Vidyalankar Institute Of Technoogy</option>
                            <option value="Vivekanand">Swani Vivekanand </option>
                            <option value="DMCE">Datta Meghe College Of Engineering</option>
                        </select>
                    </div>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the Terms and Conditions</a></label>
                </div>
                <div class="form-submit">
                    <input type="submit" name="submit" id="submit" class="submit" value="Register" />
                </div>
            </form>
        </div>

    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>