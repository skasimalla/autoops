package com.atomicitysystems.Util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Properties;
import java.util.logging.Logger;

public class FileUtil {
	public static FileUtil o;

	public static FileUtil getInstance() {
		if (o == null) {
			o = new FileUtil();
		}
		return o;
	}
	private final static Logger LOGGER = Logger.getLogger(FileUtil.class.getName());

	public static void main(String[] args) {
		LOGGER.info(FileUtil.getInstance().getProp("accept_url"));
	}

	public String readFile(String path) {
		StringBuffer sb = new StringBuffer();
		try (BufferedReader br = new BufferedReader(new FileReader(path))) {
			String line = null;
			while ((line = br.readLine()) != null) {
				sb.append(line + "\n");
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return sb.toString();
	}

	public String getProp(String propName) {
		String path = System.getProperty("user.home") + "/" + Constants.appBaseFolder + "/" + Constants.propsFile;
		LOGGER.info(path);
		Properties prop = new Properties();
		InputStream is = null;
		try {
			is = new FileInputStream(path);
			//is = getClass().getClassLoader().getResourceAsStream(Constants.propsFile);
			prop.load(is);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				is.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		// get the property value and print it out
		return prop.getProperty(propName);
	}

	public void writeToFile(String share_location, String txnNumber, String result) {
		// Write this string to file.
		PrintWriter writer;
		try {
			File file = new File(share_location + txnNumber + ".txt");
			LOGGER.info("Writing to file" + share_location + txnNumber + ".txt");
			writer = new PrintWriter(file, "UTF-8");
			writer.println("The first line");
			writer.println(result);
			writer.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
