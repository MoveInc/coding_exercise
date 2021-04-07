package com.move.exercise;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class AnagramServiceTest {
	
	@Test
	public void testService() {
		String[] expected = {"finder", "friend", "redfin", "refind"};

		AnagramService service = new AnagramService();
		String[] result = service.findAnagrams("friend");
		
		assertEquals(expected, result);
	}
}
