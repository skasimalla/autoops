package com.atomicitysystems.Actions;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;
import com.atomicitysystems.Util.Constants;
import com.atomicitysystems.Util.DBUtil;
import com.atomicitysystems.Util.FileUtil;
import com.atomicitysystems.Util.JSSH2Shell;
import com.atomicitysystems.Util.StringUtil;

public class PerformOperation {
	public static PerformOperation x;

	public static PerformOperation getInstance() {
		if (x == null) {
			x = new PerformOperation();
		}
		return x;
	}

	private final static Logger LOGGER = Logger.getLogger(PerformOperation.class.getName());

	public static void main(String[] args) {
		LOGGER.info(FileUtil.getInstance().getProp("from_DL"));
	}

	public String performRequest(Map<String, String> allRequestParams) {
		String output_folder = FileUtil.getInstance().getProp("output_folder");
		String share_location = "";
		
		if(FileUtil.getInstance().getProp("baseLocation").equals("home"))
			share_location= System.getProperty("user.home") + FileUtil.getInstance().getProp("share_location");
		else if (FileUtil.getInstance().getProp("baseLocation").equals("home"))
			share_location= FileUtil.getInstance().getProp("share_location");
			
		
		String user = allRequestParams.get(Constants.userName);
		String passwd = allRequestParams.get(Constants.password);
		String txnNumber = allRequestParams.get(Constants.txnNumber);
		String type = allRequestParams.get(Constants.type);
		String token = allRequestParams.get(Constants.token);
		String fid = allRequestParams.get(Constants.fid);
		Connection conn = DBUtil.getInstance().getConnection();
		try {
			LOGGER.info("Connection check " + conn.isClosed() + conn.isValid(10));
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
		String output_link = output_folder + txnNumber + ".txt";
		HashMap<String, String> hm = DBUtil.getInstance().getTxnValueFromDB(conn, txnNumber);
		hm.put("txnNumber", txnNumber);
		hm.put(Constants.userName, user);
		hm.put(Constants.output_link, output_link);
		String host = hm.get(Constants.SERVER);
		String command = hm.get(Constants.PARAM1);// Ready made command
		String result = new JSSH2Shell().commandExecutor(host, user, passwd, command, type, token, fid);
		FileUtil.getInstance().writeToFile(share_location, txnNumber, result);
		// Finished writing
		StringUtil.getInstance().sendEmailWrapper(hm, conn);
		return txnNumber;
	}
}
