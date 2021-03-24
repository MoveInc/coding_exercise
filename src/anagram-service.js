const fs = require('fs');

class AnagramService {

  constructor(dictionaryFilePath) {
    this.dictionaryFilePath = dictionaryFilePath;
    this.wordsMap = new Map();
  }

  async loadDictionary() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dictionaryFilePath, (err, data) => {
        if (err) {
          return reject(err);
        }

        const lines = data.toString().split('\n');
        lines.forEach((line) => this.wordsMap.set(line.toLowerCase(), [line]));
        return resolve(this);
      });
    });
  }

  async getAnagrams(term) {
    if (!this.wordsMap || this.wordsMap.size === 0) {
      throw Error('Error: Dictionary not initialized');
    }

    // TODO: The anagram lookup 🤦‍♂️
    return this.wordsMap.get(term);
  }
}

module.exports = AnagramService;
