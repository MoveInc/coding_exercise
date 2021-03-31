# Anagram Finder REST Exercise

This notional exercise implements a basic REST service which returns all anagrams of a given word based on an internal word dictionary.  At least, that's what it's _supposed_ to do.  Continue reading for more details.

## Development

### Scripts

- `> npm i` - install dependencies
- `> npm test` - run unit tests
- `> npm start` - run the server

### REST Service

After starting the server, the REST endpoint can be invoked using http://localhost:8000/?term=WORD where *WORD* is the term to find anagrams for.  The response should be a JSON payload containing a string array of all matching anagrams.

## Problems

The project was abandoned before it could be completed.  It currently has the following issues:

* The included unit test fails
* The endpoint doesn't return correct results

