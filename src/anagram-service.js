const fs = require('fs');

/**
 * Looks up anagrams of a given word based on the 
 * word dictionary provided in the constructor.
 */
class AnagramService {

	/**
	 * Creates an AnagramService instance
	 * @param {string} dictionaryFilePath Path to the dictionary file
	 */
	constructor(dictionaryFilePath) {
		this.dictionaryFilePath = dictionaryFilePath;
		this.wordsMap = new Map();
		this.lines = [];
	}

	/**
	 * Parses and loads the dictionary
	 * @returns Promise containing the initialized AnagramService
	 */
	async loadDictionary() {
		return new Promise((resolve, reject) => {
			fs.readFile(this.dictionaryFilePath, (err, data) => {
				if (err) {
					return reject(err);
				}

				// const lines = this.lines = data.toString().split('\n');
				this.lines = data.toString().split('\n');

				// lines.forEach((line) => {
				// 	this.wordsMap.set(line.toLowerCase(), this.processAnagrams(line));
				// });

				return resolve(this);
			});
		});
	}

	processAnagrams(word) {
		const letters = word.split('');
		// test is the word being checked from the original lines array.
		// word is the current word we are finding anagrams for.
		const results = this.lines.filter((test) => {
			if (word.length === test.length) {
				const tested = {};
				return letters.every((letter) => {
					if (typeof tested[letter] === 'undefined') {
						const duplicatesRE = new RegExp(`${letter}`, 'ig');
						const duplicatesTest = test.match(duplicatesRE) || [];
						const duplicatesLine = word.match(duplicatesRE) || [];
						tested[letter] = duplicatesTest.length === duplicatesLine.length;
					}

					return tested[letter];
				});
			}

			return false;
		});

		// console.log(`Matches for ${word}: `, results.join(', '));
		return results;
	}
	/**
	 * Returns all anagrams for the given term
	 * @param {string} term The term to find anagrams for 
	 * @returns A string[] of anagram matches
	 */
	async getAnagrams(term) {
		if (!this.lines || this.lines.length === 0) {
			throw Error('Error: Dictionary not initialized');
		}

		// TODO: The anagram lookup 🤦‍♂️
		return this.processAnagrams(term);
	}
}

module.exports = AnagramService;
