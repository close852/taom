package spring.basic.controller;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Hello2Controller extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) {

	}
}
