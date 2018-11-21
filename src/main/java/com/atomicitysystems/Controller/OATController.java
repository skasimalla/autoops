package com.atomicitysystems.Controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import com.atomicitysystems.Actions.PerformOperation;
import com.atomicitysystems.Actions.RequestOperation;
import com.atomicitysystems.DAO.Greeting;
import com.atomicitysystems.DAO.Record;
import com.atomicitysystems.Util.Constants;
import com.atomicitysystems.Util.StringUtil;
@Controller
public class OATController {
	

	@RequestMapping(value = ("/RequestAnOperation"), method = RequestMethod.GET)
	public ModelAndView search(@RequestParam Map<String, String> allRequestParams) {
		System.out.println("allRequestParams"+allRequestParams.toString());
		String txnNumber =RequestOperation.getInstance().requestHandler(allRequestParams);
		ModelAndView mv = new ModelAndView("status");
		mv.addObject("txnNumber", txnNumber);
		return mv;
	}
	//Another operation
	@RequestMapping("/OperationApproval")
	public ModelAndView showMessage1(
			@RequestParam(value = "txnNumber") String txnNumber) {
		System.out.println("in controller with param:" + txnNumber);
		ModelAndView mv = new ModelAndView("perform");
		mv.addObject("txnNumber", txnNumber);
		return mv;
	}
	
	@RequestMapping("/OperationReject")
	public ModelAndView showMessage2(
			@RequestParam(value = "txnNumber") String txnNumber) {
		System.out.println("In controller with param:" + txnNumber);
		ModelAndView mv = new ModelAndView("reject");
		mv.addObject("txnNumber", txnNumber);
		return mv;
	}
	
	@RequestMapping("/PerformOperation")
	public ModelAndView x(@RequestParam Map<String, String> allRequestParams) {
		System.out.println(allRequestParams.toString());
		String txnNumber =PerformOperation.getInstance().performRequest(allRequestParams);
		
		ModelAndView mv = new ModelAndView("status2");
		mv.addObject("txnNumber", txnNumber);
		return mv;
		
	}
	
	  
}
