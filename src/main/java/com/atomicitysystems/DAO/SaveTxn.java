package com.atomicitysystems.DAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.logging.Logger;
import com.atomicitysystems.Actions.PerformOperation;
import com.atomicitysystems.Util.Constants;
import com.atomicitysystems.Util.DBUtil;
public class SaveTxn {
	private final static Logger LOGGER = Logger.getLogger(SaveTxn.class.getName());

	
	public static String saveTxnInDB(HashMap<String, String> hm) {
		String id = null;
		try {
			long myId = 0;
			Connection conn = DBUtil.getInstance().openConnectionH2();
			String sqlIdentifier = "SELECT OAT_TXN_SEQ.NEXTVAL from dual";
			PreparedStatement pst = conn.prepareStatement(sqlIdentifier);
			ResultSet rs = pst.executeQuery();
			if (rs.next()) {
				myId = rs.getLong(1);
			}
			String query = "INSERT into OAT_TXN (TXN_ID,ACTION_ID, SERVER, PARAM1, REQUESTOR, FID ) values (?,?,?, ?, ?,? ) ";
			PreparedStatement ps = conn.prepareStatement(query);
			ps.setLong(1, myId);
			ps.setString(2, hm.get(Constants.action));
			ps.setString(3, hm.get(Constants.server));
			ps.setString(4, hm.get(Constants.param));
			ps.setString(5, hm.get(Constants.requestor));
			ps.setString(6, hm.get(Constants.fid));
			LOGGER.info("Output" + ps.executeUpdate());
			id = Long.toString(myId);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return id;
	}
}
