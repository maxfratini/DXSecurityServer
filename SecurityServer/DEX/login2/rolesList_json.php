<?php 
include 'mylogger.php';
include 'conn.php';

	$conn = ConnectionFactory::getFactory()->getConnection();
	
	$rs = $conn->query("select * from roles_type");
	$_role = array();
	while ($row = $rs->fetchArray(fetchArray)) {
		array_push($_role, $row);
	}
	mydebug("role list:".$_role);
	echo json_encode($_role);

?>
