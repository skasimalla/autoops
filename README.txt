Prerequisite: 
Java needs to be installed on the machine where installation is to be performed.

If you have this file, you already downloaded the file autoops.zip

Steps:
1. Unzip the file
2. Go to conf folder and fix the values in the mail.props
	The original settings look like 
				mail.smtp.starttls.enable=false
				mail.smtp.auth=false
				mail.smtp.port=25
				mail.smtp.host=localhost

				mail.smtp.user=autoops@yourcompany.com
				mail.smtp.password=

	If you have an SMTP server running on th machine, this should work as is, you might want to update your email.

	The below settings are to use it with gmail
				mail.smtp.starttls.enable=true
				mail.smtp.auth=true
				mail.smtp.port=587
				mail.smtp.host=smtp.gmail.com

				mail.smtp.user=your_email@gmail.com
				mail.smtp.password=your_password
	To make it gmail work in password mode, you need to disable the secure mode.
	https://support.google.com/a/answer/6260879?hl=en
	There is a way to do it without disabling the secure mode, please contact us for support.

3. Go to static folder, open main.js search for the below line and change localhost to the name of the host where you are running this.
   module.exports = {"coatApiUrl":"http://localhost:8090/"};
   to
   module.exports = {"coatApiUrl":"http://your_machine_name:8090/"};

4. Starting the application: Run start.sh if unix or start.bat if windows, this should start the application.

5. Open http://hostname:8082 
	The below should be prepopulated
	JDBC URL : jdbc:h2:file:./db/oat;IFEXISTS=TRUE;	
	User Name:oat
	PASSWORD:123456
	Once logged in 
		Run the statement
		INSERT INTO OAT_MAPPING (category,column_name,mapped_value) VALUES ('TeamNameMapping','Name_of_your_team','youremail@yourcompany.com'); 
	Note: In the next release we will have this in the UI	

6. Autoops can be accessed from URL http://hostname:8090
   
7. Please click on registration link, and create a user account which will allow you to login.
   This is a quick one time registration which will validate your email.


Testing:
1.> Click on request 
2.> Select option to be performed (List contents of a folder)
3.> Service Account: serviceacct1
4.> Enter Server Name:  35.227.101.20
(This is one of my machines accessible on the internet.)
5.> Path /tmp  (The questions change based on selected options)

Typical folder structure
h2-1.4.197.jar
stop.bat
LICENSE.txt
conf
db
serve
stop.sh
start.bat
start.sh
gs-rest-service-0.1.0.jar
static
logs
README.txt




KNOWN ISSUES
The text after end of <p> tag is getting truncated in the request.txt and response.txt
This is only happening in google mail and works fine in local smtp based mail.

Any questions please contact skasimalla@gmail.com