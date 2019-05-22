<?php
session_start();
$passwd =  '$2y$12$APXTg8dsMzXkvEyeAbtBD.DI4N7DveUhC4mBZiAKORXS3bctYRNEW';
if(isset($_SESSION['login'])) {header("Location: /");}
if($_SERVER['REQUEST_METHOD'] == 'POST' && password_verify($_POST['password'], $passwd)){
  $_SESSION['login'] = 5;
  session_write_close();
  header('Location: /');		
  exit();
}
if (isset($_GET['logout'])) {
  unset($_SESSION['login']);
  session_unset();
  session_destroy();
  header("Location: config.php");
  exit;
 }

?>
  <!DOCTYPE html>
  <html lang="EN">
  <head>
    <meta charset="utf-8">
    <title>MUNA BOT ADMIN CONSOLE</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="http://fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body> 
      <div class="form-box">
      <h5>MunaBot</h5>  
      <form method="POST" action="">                 
          <input id="password"  type="password" name="password" placeholder="password" required><br>
          <input class="button-primary" type="submit" value="Log in">
      </form>
     
    </div>
    
  <script src="js/jquery.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
