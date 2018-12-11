package com.atomicitysystems.Util;

import java.util.HashMap;
import java.util.Properties;
import java.util.logging.Logger;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class SendMail {

	public String from;
	public String to;
	public String cc;
	public String bcc;
	public String subject;
	public String htmlString;
	public String filePath;
	
	private final static Logger LOGGER = Logger.getLogger(SendMail.class.getName());

	public static void main(String[] args) {
		String[] a = { "sunnybond49@gmail.com", "sunnybond49@gmail.com", "", "", "Subject", "", "Body" };

		args = a;

		if (args.length == 7) {

			HashMap<String, String> hm = new HashMap<String, String>();
			hm.put("from", args[0]);
			hm.put("to", args[1]);
			hm.put("cc", args[2]);
			hm.put("bcc", args[3]);
			hm.put("subject", args[4]);
			hm.put("filePath", args[5]);
			hm.put("htmlString", args[6]);

			new SendMail(hm).sendEmail();
		} else {
			LOGGER.info("Insufficient Arguments.the arguement should have 1.from Address 2.to Address");
			LOGGER.info("3.cc 4. bcc 5.subject 6.Absolute File Path 7.body content");
		}

	}

	public SendMail(HashMap<String, String> hm) {
		super();
		this.from = hm.get("from");
		this.to = hm.get("to");
		this.cc = hm.get("cc");
		this.bcc = hm.get("bcc");
		this.subject = hm.get("subject");
		this.filePath = hm.get("filePath");
		this.htmlString = hm.get("htmlString");
	}

	public void sendEmail() {
		try {
			MimeMessage message = new MimeMessage(mailcredentials());
			message.addHeader("Content-type", "text/HTML; charset=UTF-8");
			message.addHeader("format", "flowed");
			message.addHeader("Content-Transfer-Encoding", "8bit");
			message.setFrom(new InternetAddress(from));
			message.setReplyTo(InternetAddress.parse(from, false));
			message.setSubject(subject, "UTF-8");

			InternetAddress[] recipients = recepientAddresses(to);
			message.setRecipients(Message.RecipientType.TO, recipients);
			LOGGER.info("CC value:" + cc.length());
			if (cc.length() > 0) {
				InternetAddress[] CarbonCopies = recepientAddresses(cc);
				message.addRecipients(Message.RecipientType.CC, CarbonCopies);
			}
			if (bcc.length() > 0) {
				message.addRecipients(Message.RecipientType.BCC, bcc);
			}
			String body = htmlString;
			// htmlmessageBodyPart.setContent(body, "text/html");
			Multipart multiContentMultipart = new MimeMultipart("alternative");
			Multipart rootBodypart = new MimeMultipart("related");
			BodyPart htmlmessageBodyPart = new MimeBodyPart();
			htmlmessageBodyPart.setContent(body, "text/html");
			multiContentMultipart.addBodyPart(htmlmessageBodyPart);
			rootBodypart.addBodyPart(htmlmessageBodyPart);
			// if(filePath!=""){
			// BodyPart messageBodyPart = new MimeBodyPart();
			// String filename =filePath;
			// DataSource source = new FileDataSource(filename);
			// messageBodyPart.setDataHandler(new DataHandler(source));
			// messageBodyPart.setFileName(filename);
			// rootBodypart.addBodyPart(messageBodyPart);
			// }

			message.setContent(rootBodypart);
			Transport.send(message);
			LOGGER.info("EMail sent Successfully !!");
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}

	private Session mailcredentials() {
		String smtpHostServer = "localhost";
		Properties props = System.getProperties();
		props.put("mail.smtp.starttls.enable", true);
		props.put("mail.smtp.port", 25);
		props.put("mail.smtp.host", smtpHostServer);
		props.put("mail.smtp.auth", false);

		Session session = Session.getInstance(props, null);
		return session;
	}

	public InternetAddress[] recepientAddresses(String recipients) throws AddressException {
		String[] recipientList = recipients.split(",");
		InternetAddress[] recipientAddress = new InternetAddress[recipientList.length];
		int counter = 0;
		for (String recipient : recipientList) {
			recipientAddress[counter] = new InternetAddress(recipient.trim());

			counter++;
			LOGGER.info("recipientAddress" + recipientAddress);
		}
		return recipientAddress;
	}

}