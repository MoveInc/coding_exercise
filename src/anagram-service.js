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

        const lines = data.toString().split('\n');

        lines.forEach((line) => {
          this.wordsMap.set(line.toLowerCase(), [line]); 
        });
        return resolve(this);
      });
    });
  }

  /**
   * Returns all anagrams for the given term
   * @param {string} term The term to find anagrams for 
   * @returns A string[] of anagram matches
   */
  async getAnagrams(term) {
    if (!this.wordsMap || this.wordsMap.size === 0) {
      throw Error('Error: Dictionary not initialized');
    }

    // TODO: The anagram lookup 🤦‍♂️
    return this.wordsMap.get(term);
  }
}

module.exports = AnagramService;
