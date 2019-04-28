package com.atomicitysystems.Util;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import com.atomicitysystems.DAO.Mapping;

public class StringUtil {
	public static StringUtil x;

	public static StringUtil getInstance() {
		if (x == null) {
			x = new StringUtil();
		}
		return x;
	}
	private final static Logger LOGGER = Logger.getLogger(StringUtil.class.getName());


	public static void main(String args[]) {
		LOGGER.fine(new StringUtil().returnTokens("List the contents of a folder").toString());
		//new StringUtil().someStringOps("SCP a file from one server to another");
		
	}

	public List<String> returnTokens(String s) {
		Connection conn = DBUtil.getInstance().getConnection();
		s = DBUtil.getInstance().getMappingValueFromDB("Action", s, conn);
		LOGGER.info("S is " + s);
		// s = "ls -lrt ${text:PATH}";
		ArrayList<String> li = new ArrayList<String>();
		Matcher m = Pattern.compile("\\$\\{(.*?)\\}").matcher(s);
		while (m.find()) {
			li.add(m.group(1));
		}
		LOGGER.info("returnTokens"+li.toString());
		return li;
	}

	public ArrayList<String> returnActions() {
		Connection conn = DBUtil.getInstance().getConnection();
		ArrayList<String> li = null;
		li = DBUtil.getInstance().getMappingListFromDB("Action", "%", conn);
		if (li == null) {
			li = new ArrayList<String>();
			li.add("DB not intiailized");
		}
		return li;
	}

	public void sendEmailWrapper(HashMap<String, String> hm, Connection conn) {
		HashMap<String, String> hmMail = new HashMap<String, String>();
		String from_DL = FileUtil.getInstance().getProp("from_DL");
		String bcc_DL = FileUtil.getInstance().getProp("bcc_DL");
		String emailPostFix = FileUtil.getInstance().getProp("emailPostFix");
		String subject = DBUtil.getInstance().getMappingValueFromDB(Constants.EmailTemplateSubject,
				Constants.RequestCompleted, conn);
		String htmlStringPath = DBUtil.getInstance().getMappingValueFromDB(Constants.EmailTemplate,
				Constants.RequestCompleted, conn);
		//String filePath = System.getProperty("user.home") + "/oat/" + htmlStringPath;
		String filePath = htmlStringPath;
		String htmlString = FileUtil.getInstance().readFile(filePath);
		LOGGER.fine("htmlString"+htmlString);
		String requestor = hm.get(Constants.REQUESTOR);
		for (String key : hm.keySet()) {
			subject = subject.replaceAll("\\$\\{" + key + "\\}", hm.get(key));
			htmlString = htmlString.replaceAll("\\$\\{" + key + "\\}", hm.get(key));
		}
		LOGGER.fine("htmlString after replace"+htmlString);
		
		
		hmMail.put(Constants.from, from_DL);
		hmMail.put(Constants.to, requestor + emailPostFix);
		hmMail.put(Constants.cc, "");
		hmMail.put(Constants.bcc, bcc_DL);
		hmMail.put(Constants.subject, subject);
		hmMail.put(Constants.htmlString, htmlString);
		new SendMail(hmMail).sendEmail();
	}

	public List<Mapping> someStringOps(String action) {
		LOGGER.fine("in controller with param:" + action);
		List<String> list = new StringUtil().returnTokens(action);
		LOGGER.fine("List is "+list);
		List<Mapping> li = new ArrayList<Mapping>();
		for (String s : list) {
			String[] sa = s.split(":");
			String s1, s2;
			if (sa.length == 2) {
				s1 = sa[0];
				s2 = sa[1];
			} else {
				s1 = "text";
				s2 = sa[0];
			}
			li.add(new Mapping(s1, s2));
		}
		
		return li;
	}
}
