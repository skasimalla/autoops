package com.atomicitysystems.Util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.logging.Logger;
import javax.activation.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import com.atomicitysystems.DAO.SaveTxn;
public class DBUtil {
	public static DBUtil dbutil;
	public static DBUtil getInstance() {
		if (dbutil == null) {
			dbutil = new DBUtil();
		}
		return dbutil;
	}
	private final static Logger LOGGER = Logger.getLogger(DBUtil.class.getName());

	public static void main(String[] args) {
		LOGGER.info(""+DBUtil.getInstance().openConnectionH2());
		
	}
	public String getMappingValueFromDB(String category, String columnName,
			Connection conn) {
		try {
			String query = "SELECT MAPPED_VALUE FROM OAT_MAPPING where CATEGORY=? and COLUMN_NAME=?";
			PreparedStatement ps = conn.prepareStatement(query);
			ps.setString(1, category);
			ps.setString(2, columnName);
			ResultSet rs = ps.executeQuery();
			rs.next();
			return rs.getString("MAPPED_VALUE");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public ArrayList<String> getMappingListFromDB(String category,
			String columnName, Connection conn) {
		ArrayList<String> li = new ArrayList<String>();
		try {
			String query = "SELECT COLUMN_NAME FROM OAT_MAPPING where CATEGORY=? and COLUMN_NAME like ?";
			PreparedStatement ps = conn.prepareStatement(query);
			ps.setString(1, category);
			ps.setString(2, columnName);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				li.add(rs.getString("COLUMN_NAME"));
			}
			return li;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public HashMap<String, String> getTxnValueFromDB(Connection conn,
			String txnID) {
		HashMap<String, String> hm = new HashMap<String, String>();
		try {
			String query = "SELECT * FROM OAT_TXN where TXN_ID=?";
			PreparedStatement ps = conn.prepareStatement(query);
			ps.setInt(1, Integer.parseInt(txnID));
			ResultSet rs = ps.executeQuery();
			rs.next();
			hm.put("ACTION_ID", rs.getString("ACTION_ID"));
			hm.put("SERVER", rs.getString("SERVER"));
			hm.put("PARAM1", rs.getString("PARAM1"));
			hm.put("REQUESTOR", rs.getString("REQUESTOR"));
			return hm;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public Connection getConnection() {
		Connection conn = null;
		Context initialContext;
		try {
			initialContext = new InitialContext();
			DataSource datasource = (DataSource) initialContext
					.lookup("java:/comp/env/jdbc/sunnydb");
			conn = ((Statement) datasource).getConnection();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	public Connection openConnectionH2() {
		Connection conn = null;
		try {
			Class.forName("org.h2.Driver");
			conn = DriverManager.getConnection(
					FileUtil.getInstance().getProp("jdbc_connection_string"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if (conn == null)
			LOGGER.info("Returning null connection");
		return conn;
	}
}
