<?php 
include 'mylogger.php';
include 'config.php';

session_start();



//signal logout in progress, to avoid relogin
$_SESSION["logoutinprogress"]=true;
header_remove("profile");
unset($_SERVER[Cfg::SM_UID]);
unset($_SESSION["profile"]);
unset($_COOKIE["profile"]);
setcookie("profile", "null", 1, "/", Cfg::INSTALL_DOMAIN);
mydebug("Nulled all profile info");

//print $result;
header("refresh:0; url=".Cfg::SM_LOGOFFURL);

?>
