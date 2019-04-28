package com.atomicitysystems.Util;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.util.logging.Logger;
import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

public class JSSH2Shell {
	private final static Logger LOGGER = Logger.getLogger(JSSH2Shell.class.getName());

	static Session session;
	static Channel channel;
	public static void main(String[] args) {
		JSSH2Shell s1 = new JSSH2Shell();
		String user = "sunny";
		String host = "192.168.1.9";
		String passwd = "7777777";
		String command = "ls -lrt";
		try {
			LOGGER.fine(s1.commandExecutor(host, user, passwd, command, "", "", "root"));
		} catch (JSchException | IOException | InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public String commandExecutor(String host, String user, String passwd, String command, String type, String token,
			String fid) throws JSchException, IOException, InterruptedException {
		String[] commands;
		if (type.contains("pbrun -u")) {
			commands = new String[] { "pbrun -u " + fid + " dap", token, "OAT", passwd, "whoami", command, "whoami" };
		} else {
			commands = new String[] { "whoami", command, "whoami" };
		}
		return commandExecutor(host, user, passwd, commands);
	}

	public String commandExecutor(String host, String user, String passwd, String[] commands) throws JSchException, IOException, InterruptedException {
		StringBuilder sb = new StringBuilder();
		int port = 22;
		int i = 0;
		String c;
		
			JSch jsch = new JSch();
			jsch.removeAllIdentity();
			session = jsch.getSession(user, host, port);
			session.setPassword(passwd);
			session.setConfig("StrictHostKeyChecking", "no");
			session.setConfig("PubkeyAuthentication", "no");
			session.setConfig("PreferredAuthentications", "publickey,keyboard-interactive,password");
			session.connect();
			LOGGER.fine("Establishing Connection...");
			channel = session.openChannel("shell");
			channel.connect();
			((ChannelShell) channel).setPty(true);
			PrintStream stream = new PrintStream(channel.getOutputStream());
			InputStream in = channel.getInputStream();
			do {
				int cn = in.read();
				int a = in.available();
				c = Character.toString((char) cn);
				System.out.print(c);
				//LOGGER.fine("~"+a+"~"+cn+";");
				sb.append(c);
				if ("$:#".contains(c) && a == 1) {
					//LOGGER.fine("hit");
					stream.print(commands[i++] + "\n");
					stream.flush();
				}
			} while ((i < commands.length));
			stream.close();
			Thread.sleep(1000);
			channel.disconnect();
			session.disconnect();
		
		return sb.toString().replaceAll("\u001B\\[[;\\d]*m", "");
	}
}