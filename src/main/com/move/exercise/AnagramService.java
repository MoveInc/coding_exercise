package com.move.exercise;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

/**
 * This service loads an internal dictionary file and looks up 
 * anagrams for a given term based on the words in the dictionary. 
 */
public class AnagramService {

	/**
	 * Contains all words loaded from the dictionary file
	 */
	private Set<String> allWords;
	
	public AnagramService() {
		this.allWords = new HashSet<String>();
	}
	
	/**
	 * Loads the internal dictionary file.  May require some time to execute.
	 * @throws IOException
	 */
	public void loadDictionary(String filename) throws IOException {
		InputStream in = null;
		if (filename == null) {
			in = getClass().getClassLoader().getResourceAsStream("com/move/exercise/resources/dictionary.txt");
		}
		else {
			in = new FileInputStream(filename);
		}

		try (BufferedReader reader = new BufferedReader(new InputStreamReader(in))) {
			String line;
			while ( (line = reader.readLine()) != null) {
				this.allWords.add(line.trim().toLowerCase());
			}
		}
		
		System.out.println("Loaded dictionary. Word count: " + this.allWords.size());
	}
	
	/**
	 * Finds anagrams and returns an array of matches
	 * @param term The term to search for
	 * @return The resulting anagrams
	 */
	public String[] findAnagrams(String term) {

		// TODO: Find the anagrams!
		return new String[] {term};
	}
}
