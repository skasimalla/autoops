package com.atomicitysystems.Controller;

import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import com.atomicitysystems.Actions.PerformOperation;

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

	@RequestMapping("/PerformOperation")
	public ModelAndView x(@RequestParam Map<String, String> allRequestParams) {
		System.out.println(allRequestParams.toString());
		String txnNumber = PerformOperation.getInstance().performRequest(allRequestParams);
		ModelAndView mv = new ModelAndView("status2");
		mv.addObject("txnNumber", txnNumber);
		return mv;
	}
}
