package com.move.exercise;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet(name = "AnagramServlet", urlPatterns = {"anagrams"}, loadOnStartup = 1)  
public class AnagramServlet extends HttpServlet {

	private static final long serialVersionUID = -2565747894362720478L;

	private AnagramService service;
	private Gson gson;
	
	public AnagramServlet(AnagramService service) {
		this.service = service;
		this.gson = new Gson();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
		String term = request.getParameter("term");
		if (term == null || term.trim().length() == 0) {
			response.sendError(400, "Query parameter 'term' is required");
			return;
		}
		
		String[] results = this.service.findAnagrams(term);
		
		String json = this.gson.toJson(results);
		response.setContentType("text/json");
		response.getWriter().write(json);
	}
}
