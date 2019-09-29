package com.atomicitysystems.Controller;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.atomicitysystems.Actions.PerformOperation;
import com.atomicitysystems.Actions.RequestOperation;
import com.atomicitysystems.DTO.Mapping;
import com.atomicitysystems.Util.DBUtil;
import com.atomicitysystems.Util.FileUtil;
import com.atomicitysystems.Util.OneWayHash;
import com.atomicitysystems.Util.SendMail;
import com.atomicitysystems.Util.StringUtil;
import com.jcraft.jsch.JSchException;

@RestController
public class RESTController {
	private final static Logger LOGGER = Logger.getLogger(RESTController.class.getName());

	@RequestMapping("/register")
	
	public String register(@RequestParam(value = "name") String name, @RequestParam(value = "email") String email) {
		String link = FileUtil.getInstance().getProp("baseLink") + "verifyEmail?email=" + email + "&key="
				+ OneWayHash.oneWayHash(email);
		//check if email is valid
		String str = "Please DON'T click this link if you did not initiate AutoOps registration";
		str += "<br>" + link;
		HashMap<String, String> hm = new HashMap<String, String>();
		hm.put("from", FileUtil.getInstance().getProp("from_DL"));
		hm.put("to", email);
		hm.put("cc", "");
		hm.put("bcc", FileUtil.getInstance().getProp("bcc_DL"));
		hm.put("subject", "AutoOps: Confirm your registration");
		hm.put("filePath", "");
		hm.put("htmlString", str);
		new SendMail(hm).sendEmail();
		return "true";
	}



	//Change this method to accept Hash directly from UI, to make it more secure
	@RequestMapping("/authenticate")
	public boolean authenticate(@RequestParam(value = "userid", defaultValue = "none") String userid,
			@RequestParam(value = "password", defaultValue = "none") String password) {
		Connection conn = DBUtil.getInstance().getConnection();
		String hashFromDB = DBUtil.getInstance().getMappingValueFromDB("UserCredential", userid, conn);
		String hashFromUI = OneWayHash.oneWayHash(password);
		if (hashFromUI.equals(hashFromDB))
			return true;
		else
			return false;
	}

	//Deprecate this method and use getList with param
	@RequestMapping("/commandList")
	public List<Mapping> commandList(@RequestParam(value = "name", defaultValue = "none") String name) {
		Connection conn = DBUtil.getInstance().getConnection();
		HashMap<String, String> hm = DBUtil.getInstance().getMappingMapFromDB("Action", "%", conn);
		List<Mapping> li2 = new ArrayList<Mapping>();
		for (String key:hm.keySet())
			li2.add(new Mapping((String) hm.get(key),key));
		return li2;
	}

	@RequestMapping("/getList")
	public List<Mapping> getList(@RequestParam(value = "name", defaultValue = "none") String name) {
		Connection conn = DBUtil.getInstance().getConnection();
		ArrayList<String> li = DBUtil.getInstance().getMappingListFromDB(name, "%", conn);
		List<Mapping> li2 = new ArrayList<Mapping>();
		for (int i = 0; i < li.size(); i++)
			li2.add(new Mapping(Integer.toString(i), (String) li.get(i)));
		return li2;
	}

	@RequestMapping("/form")
	public List<Mapping> showMessage(@RequestParam(value = "action", required = true) String action,
			@RequestParam(value = "requestor", required = false) String requestor,
			@RequestParam(value = "team", required = false) String team) {
		//Move the below logic to String Utils
		List<Mapping> li = StringUtil.getInstance().someStringOps(action);
		return li;
	}

	@RequestMapping(value = ("/RequestAnOperation"), method = RequestMethod.GET)
	public String search(@RequestParam Map<String, String> allRequestParams) {
		String txnNumber;
		if (DBUtil.getInstance().getTxnCount() < 150) {
			LOGGER.fine("allRequestParams" + allRequestParams.toString());
			txnNumber = RequestOperation.getInstance().requestHandler(allRequestParams);
		} else
			txnNumber = "0";
		return "{\"txnNumber\":" + txnNumber + "}";
	}

	@RequestMapping(value = "/serve/{id}")
	@ResponseBody
	public String serve(@PathVariable("id") String id) {
		BufferedReader br;
		StringBuffer sb = new StringBuffer();
		try {
			br = new BufferedReader(new FileReader(FileUtil.getInstance().getBaseLocation() + id));
			String line = null;
			sb.append("The file name requested is" + id);
			while ((line = br.readLine()) != null) {
				LOGGER.fine(line);
				sb.append(line + "<br>");
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

	@RequestMapping("/PerformOperation")
	public String x(@RequestParam Map<String, String> allRequestParams) {
		//This is printing out the password and hence commenting it
		//LOGGER.fine(allRequestParams.toString());
		String status;
		try {
			status = PerformOperation.getInstance().performRequest(allRequestParams);
		} catch (JSchException | IOException | InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			status="Error"+e;
		}
		//ModelAndView mv = new ModelAndView("status2");
		//mv.addObject("txnNumber", txnNumber);
		return "{\"status\":\"" + status + "\"}";
	}
}
