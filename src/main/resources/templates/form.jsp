<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@page import="com.atomicitysystems.Util.StringUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>OAT</title>
</head>
<body>
	<center>
		<h2>Operations automation tool</h2>
		<form action="RequestAnOperation">


			Server Name:<input list="sl" name="server">
			<datalist id="sl">
			<option value="awd">
			</datalist>

			fid:<input list="sl" name="fid">
			

			<%--  					<datalist id="sl"> <%
 	ArrayList<String> li = StringUtil.returnActions();
 	for (int i = 0; i < li.size(); i++) 
 				{%>
			<option value="<%=li.get(i)%>">
				<%}%> 
			</datalist> --%>

			<br> <br>


			<c:if test="${not empty list}">
				<c:forEach var="listValue" items="${list}">
					<c:set var="listValueParts" value="${fn:split(listValue, ':')}" />

			${listValueParts[1]}
			<input type="${listValueParts[0]}" name="${listValueParts[1]}">
					<br>
					<br>
				</c:forEach>
			</c:if>

			<input type="hidden" name="team" value="Big Data Operations">
			<br> <br> 
			<input type="hidden" name="action"
				value="${action}"> 
				<br> <br> 
				
				<input type="hidden"
				name="requestor" value="${requestor}"> 
				
				<input type="submit"
				value="Submit">
		</form>
	</center>
</body>
</html>