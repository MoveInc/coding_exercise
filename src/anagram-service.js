const fs = require("fs");
const lodash = require("lodash");
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
    this.wordsArray = [];
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

        const lines = data.toString().split("\n");

        lines.forEach((line) => {
          this.wordsArray.push(line.toLowerCase().trim());
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
    if (!this.wordsArray || this.wordsArray.length === 0) {
      throw Error("Error: Dictionary not initialized");
    }
    const termCharacterMap = this.getCharacterMap(term);

    const filteredWordsMapKeys = this.wordsArray.filter((word) => {
      const hasSameLength = word.length === term.length;
      if (!hasSameLength) return false;
      const wordCharacterMap = this.getCharacterMap(word);
      const MapsAreEqual = lodash.isEqual(wordCharacterMap, termCharacterMap);

      return hasSameLength && MapsAreEqual;
    });

    return filteredWordsMapKeys;
  }

  getCharacterMap(word) {
    const map = {};
    for (const index in Array.from(word).sort()) {
      const character = word[index];
      if (map[character]) {
        map[character]++;
      } else {
        map[character] = 1;
      }
    }
    return map;
  }
}

module.exports = AnagramService;
