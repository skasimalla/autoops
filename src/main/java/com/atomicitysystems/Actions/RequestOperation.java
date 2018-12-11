package com.atomicitysystems.Actions;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import com.atomicitysystems.Util.Constants;
import com.atomicitysystems.Util.DBUtil;
import com.atomicitysystems.Util.FileUtil;
import com.atomicitysystems.Util.SendMail;

public class RequestOperation {
	public static RequestOperation x;

	public static RequestOperation getInstance() {
		if (x == null) {
			x = new RequestOperation();
		}
		return x;
	}

	public static void main(String[] args) {
	}

	public String requestHandler(Map<String, String> preParameterMap) {
		String txnNumber = null;
		try {
			String accept_url = FileUtil.getInstance().getProp("baseLink")
					+ FileUtil.getInstance().getProp("accept_url");
			String reject_url = FileUtil.getInstance().getProp("baseLink")
					+ FileUtil.getInstance().getProp("reject_url");
			String from_DL = FileUtil.getInstance().getProp("from_DL");
			String bcc_DL = FileUtil.getInstance().getProp("bcc_DL");
			HashMap<String, String> parameterMap = new HashMap<String, String>();
			HashMap<String, String> hmMail = new HashMap<String, String>();
			String to;
			parameterMap.put(Constants.action, preParameterMap.get(Constants.action));
			preParameterMap.remove(Constants.action);
			parameterMap.put(Constants.server, preParameterMap.get(Constants.server));
			preParameterMap.remove(Constants.server);
			parameterMap.put(Constants.team, preParameterMap.get(Constants.team));
			preParameterMap.remove(Constants.team);
			parameterMap.put(Constants.requestor, preParameterMap.get(Constants.requestor));
			preParameterMap.remove(Constants.requestor);
			parameterMap.put(Constants.fid, preParameterMap.get(Constants.fid));
			preParameterMap.remove(Constants.fid);
			// Even though it is inefficient- planning to construct the command here- this
			// is MORE auditable
			// ONLY passwords will be encrypted
			Connection conn = DBUtil.getInstance().openConnectionH2();
			String command = DBUtil.getInstance().getMappingValueFromDB("Action", parameterMap.get(Constants.action),
					conn);
			for (String key : preParameterMap.keySet()) {
				try {
					// instead of "text:"-> write a regex for anything until a :
					command = command.replaceAll("\\$\\{text:" + key + "\\}", preParameterMap.get(key));
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			System.out.println("Completed command is" + command);
			parameterMap.put(Constants.param, command);
			System.out.println("Preparam map is " + preParameterMap.toString());
			System.out.println("Param map is " + parameterMap.toString());
			txnNumber = DBUtil.getInstance().saveTxnInDB(parameterMap);
			parameterMap.put("txnNumber", txnNumber);
			parameterMap.put(Constants.accept_link, accept_url + "?" + Constants.txnNumber + "=" + txnNumber);
			parameterMap.put(Constants.reject_link, reject_url + "?" + Constants.txnNumber + "=" + txnNumber);
			String subject = DBUtil.getInstance().getMappingValueFromDB(Constants.EmailTemplateSubject,
					Constants.RequestReceived, conn);
			String htmlStringPath = DBUtil.getInstance().getMappingValueFromDB(Constants.EmailTemplate,
					Constants.RequestReceived, conn);
			System.out.println("htmlStringPath is" + htmlStringPath);
			String filePath = System.getProperty("user.home") + "/oat/" + htmlStringPath;
			String htmlString = FileUtil.getInstance().readFile(filePath);
			System.out.println("html str is " + htmlString);
			for (String key : parameterMap.keySet()) {
				try {
					System.out.println("Replacing" + key);
					subject = subject.replaceAll("\\$\\{" + key + "\\}", parameterMap.get(key));
					htmlString = htmlString.replaceAll("\\$\\{" + key + "\\}", parameterMap.get(key));
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			to = DBUtil.getInstance().getMappingValueFromDB(Constants.TeamNameMapping, parameterMap.get(Constants.team),
					conn);
			hmMail.put(Constants.from, from_DL);
			hmMail.put(Constants.to, to);
			hmMail.put(Constants.cc, "");
			hmMail.put(Constants.bcc, bcc_DL);
			hmMail.put(Constants.subject, subject);
			hmMail.put(Constants.htmlString, htmlString);
			System.out.println(hmMail.toString());
			// SendMailRequest.getInstance().sendMailRequest(hmMail);
			new SendMail(hmMail).sendEmail();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return txnNumber;
	}
}
