<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>OAT</title>
</head>
<body>
	<center>
		<h2>Operations Automation Tool</h2>
		<form action="PerformOperation">

			Txn_ID:<input type="text" name="txnNumber" value=${txnNumber}>
			<br> <br> Username:<input type="text" name="userName">
			<br> <br> Password:<input type="text" name="password">

			<br> <br> Type: <input list="sl" name="type">
			<datalist id="sl">
			<option value="no additional authentication">
			<option value="pbrun -u dap user">
			<option value="pbrun user">
			
			</datalist>


			<br> <br> Token:<input type="text" name="token"> <br>
			<br> <br> <br> <input type="submit" value="Submit">
		</form>
	</center>
</body>
</html>