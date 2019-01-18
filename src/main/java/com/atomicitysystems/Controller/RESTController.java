package com.atomicitysystems.Controller;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.atomicitysystems.Actions.RequestOperation;
import com.atomicitysystems.DAO.Mapping;
import com.atomicitysystems.Util.DBUtil;
import com.atomicitysystems.Util.FileUtil;
import com.atomicitysystems.Util.OneWayHash;
import com.atomicitysystems.Util.SendMail;
import com.atomicitysystems.Util.StringUtil;

@RestController
public class RESTController {
	
	@RequestMapping("/register")
	public String register(
			@RequestParam(value = "name") String name,
			@RequestParam(value = "email") String email) {
		
		String link = "http://"+FileUtil.getInstance().getProp("baseLink")+"verifyEmail?email="+email+"&key="+OneWayHash.oneWayHash(email);
		
		//check if email is valid
		String str="Please DON'T click this link if you did not initiate SafelyOps registration";
		str+="<br>"+link;
		
		HashMap<String, String> hm = new HashMap<String, String>();
		hm.put("from", FileUtil.getInstance().getProp("from_DL"));
		hm.put("to", email);
		hm.put("cc", "");
		hm.put("bcc", FileUtil.getInstance().getProp("bcc_DL"));
		hm.put("subject", "SafelyOps: Confirm your registration");
		hm.put("filePath", "");
		hm.put("htmlString", str);

		new SendMail(hm).sendEmail();
		
		return "true";
	}

	@RequestMapping("/verifyEmail")
	public String verifyEmail(
			@RequestParam(value = "key") String key,
			@RequestParam(value = "email") String email) {
		System.out.println("Invoked verifyEmail");
		
		if(key.equals(OneWayHash.oneWayHash(email))) {
			return "true";
		}
		return "false";
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
		ArrayList<String> li = DBUtil.getInstance().getMappingListFromDB("Action", "%", conn);
		List<Mapping> li2 = new ArrayList<Mapping>();
		for (int i = 0; i < li.size(); i++)
			li2.add(new Mapping(Integer.toString(i), (String) li.get(i)));
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
		System.out.println("allRequestParams" + allRequestParams.toString());
		String txnNumber = RequestOperation.getInstance().requestHandler(allRequestParams);
		return "{\"txnNumber\":" + txnNumber + "}";
	}
	
	
	
}
