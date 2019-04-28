package com.atomicitysystems.Controller;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.logging.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.atomicitysystems.Util.FileUtil;
import com.atomicitysystems.Util.OneWayHash;

@SpringBootApplication
public class Application {
	
	private final static Logger LOGGER = Logger.getLogger(Application.class.getName());
	public static void main(String[] args) {
		InetAddress ip;
		try {
			ip = InetAddress.getLocalHost();
			String s = ip.getCanonicalHostName() + "AtomicitySystems";
			s = OneWayHash.oneWayHash(s);
			String key = FileUtil.getInstance().getProp("key");
			if (s.equals(key)) {
				LOGGER.fine("Starting on" + s);
				SpringApplication.run(Application.class, args);
			} else {
				LOGGER.fine("Invalid key, please contact opsauto3@gmail.com");
				SpringApplication.run(Application.class, args);//Remove this line in version 2 
			}
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
	}
}