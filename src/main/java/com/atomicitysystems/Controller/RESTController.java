package com.atomicitysystems.Controller;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.atomicitysystems.DAO.Greeting;
import com.atomicitysystems.DAO.Record;

@RestController
public class RESTController {
	private AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format("List", name));
	}

	@RequestMapping("/commandList")
	public List<Record> commandList(@RequestParam(value = "name", defaultValue = "World") String name) {
		return null;
	}
}
