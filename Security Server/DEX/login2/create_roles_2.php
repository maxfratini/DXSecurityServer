<?php

include 'crypto.php';
include 'conn.php';

$roles[0]=['SUPERADMIN','sysadmin','Pippo.123'];
$roles[1]=['ADMINISTRATOR','delphix_admin','Pippo123'];
$roles[2]=['OPERATOR','delphix_oper','delphix_oper'];

$conn = ConnectionFactory::getFactory()->getConnection();
$key = hex2bin(Crypto::SEED);

foreach ($roles as $r) {
        $password = base64_encode(Crypto::encrypt($r[2], $key));
        $sql = "insert into roles_type (role,dlpx_username,dlpx_password) values('$r[0]','$r[1]','$password')";
        print "\n$sql";
        $result = $conn->query($sql);
}
?>

