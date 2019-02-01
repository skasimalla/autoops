package com.atomicitysystems.Controller;

import java.net.InetAddress;
import java.net.UnknownHostException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.atomicitysystems.Util.FileUtil;
import com.atomicitysystems.Util.OneWayHash;

@SpringBootApplication
public class Application {
	public static void main(String[] args) {
		InetAddress ip;
		try {
			ip = InetAddress.getLocalHost();
			String s = ip.getCanonicalHostName() + "AtomicitySystems";
			System.out.println("Starting on" + s);
			s = OneWayHash.oneWayHash(s);
			String key = FileUtil.getInstance().getProp("key");
			if (s.equals(key))
				SpringApplication.run(Application.class, args);
			else
				System.out.println("Invalid key, please contact opsauto3@gmail.com");
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
	}
}