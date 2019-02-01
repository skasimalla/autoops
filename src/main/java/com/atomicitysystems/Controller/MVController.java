package com.atomicitysystems.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import com.atomicitysystems.Util.DBUtil;
import com.atomicitysystems.Util.OneWayHash;

@Controller
public class MVController {
	//Another operation
	@RequestMapping("/OperationApproval")
	public String showMessage1(@RequestParam(value = "txnNumber") String txnNumber, Model model) {
		System.out.println("in controller with param:" + txnNumber);
		//ModelAndView mv = new ModelAndView("perform");
		model.addAttribute("txnNumber", txnNumber);
		return "perform";
	}

	@RequestMapping("/OperationReject")
	public ModelAndView showMessage2(@RequestParam(value = "txnNumber") String txnNumber) {
		System.out.println("In controller with param:" + txnNumber);
		ModelAndView mv = new ModelAndView("reject");
		mv.addObject("txnNumber", txnNumber);
		return mv;
	}

	@RequestMapping("/verifyEmail")
	public ModelAndView verifyEmail(@RequestParam(value = "key") String key,
			@RequestParam(value = "email") String email) {
		System.out.println("Invoked verifyEmail");
		ModelAndView mv;
		if (key.equals(OneWayHash.oneWayHash(email))) {
			mv = new ModelAndView("password");
			mv.addObject("email", email);
			return mv;
		}
		mv = new ModelAndView("password");
		mv.addObject("email", email);
		return mv;
	}

	@RequestMapping("/setPassword")
	public ModelAndView setPassword(@RequestParam(value = "email") String email,
			@RequestParam(value = "password") String password,
			@RequestParam(value = "copypassword") String copypassword) {
		System.out.println("Invoked setPassword");
		ModelAndView mv = null;
		if (password.equals(copypassword)) {
			
			DBUtil.getInstance().deleteMapping("UserCredential", email);
			DBUtil.getInstance().addMapping("UserCredential", email, OneWayHash.oneWayHash(password));
			mv = new ModelAndView("yay");
			mv.addObject("email", email);
			return mv;
		}
		return mv;
	}
}
