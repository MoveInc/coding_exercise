package com.move.exercise;

import java.io.File;

import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.servlet.ServletHolder;

public class Main {

	public static void main(String[] args) throws Exception {

		String dictionaryFile = null;
		if (args != null && args.length > 0) {
			dictionaryFile = System.getProperty("user.dir") + File.separator + args[0];
		}
		
		Server server = new Server();
        ServerConnector connector = new ServerConnector(server);
        connector.setPort(8090);
        server.setConnectors(new Connector[] {connector});
        
        ServletHandler servletHandler = new ServletHandler();
        server.setHandler(servletHandler);
        
        AnagramService service = new AnagramService();
        
        service.loadDictionary(dictionaryFile);
        AnagramServlet servlet = new AnagramServlet(service);
        servletHandler.addServletWithMapping(new ServletHolder(servlet), "/anagram");

        server.start();
	}
}
