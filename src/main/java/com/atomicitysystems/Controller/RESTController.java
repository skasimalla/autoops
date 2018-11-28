package com.atomicitysystems.Controller;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.atomicitysystems.DAO.Greeting;
import com.atomicitysystems.DAO.Record;
import com.atomicitysystems.Util.DBUtil;
import com.atomicitysystems.Util.OneWayHash;
import com.atomicitysystems.Util.StringUtil;

@RestController
public class RESTController {
	private AtomicLong counter = new AtomicLong();

	@RequestMapping("/test")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format("List", name));
	}
	
	@RequestMapping("/form")
	public List<Record> showMessage(
			 @RequestParam(value = "action", required = false) String action
			,@RequestParam(value = "requestor", required = false) String requestor
			,@RequestParam(value = "team", required = false) String team
			) {
		System.out.println("in controller with param:" + action);
		List<String> list = new StringUtil().returnTokens(action);
		System.out.println(list);
		
		List<Record> li = new ArrayList();
		int i=0;
		for(String s:list) {
			String [] sa = s.split(":");
			String s1,s2;
			if(sa.length==2) {
			s1=sa[0];
			s2=sa[1];
			}else {
				s1="text";
				s2=sa[0];
			}
			li.add(new Record(s1, s2 ));
		}
		return li;
	}

	@RequestMapping("/commandList")
	public List commandList(@RequestParam(value = "name", defaultValue = "none") String name) {
		
		Connection conn= DBUtil.getInstance().openConnectionH2();
		List li =DBUtil.getInstance().getMappingListFromDB("Action", "%", conn);
		return li;
	}
	
	@RequestMapping("/authenticate")
	public boolean authenticate(@RequestParam(value = "userid", defaultValue = "none") String userid
							   ,@RequestParam(value = "password", defaultValue = "none") String password) {

		Connection conn = DBUtil.getInstance().openConnectionH2();

		String hashFromDB=DBUtil.getInstance().getMappingValueFromDB("UserCredential", userid, conn);
		String hashFromUI= OneWayHash.oneWayHash(password);
		
		if(hashFromUI.equals(hashFromDB))
			return true;
		else 
			return false;
		
	}

	@RequestMapping("/createLogin")
	public String createLogin(@RequestParam(value = "user", defaultValue = "none") String name
							 ,@RequestParam(value = "user", defaultValue = "none") String password
				) {
		
		return "true";
	}
}
