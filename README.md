# Anagram Finder REST Exercise, Java Edition

This notional exercise implements a basic REST service which returns all anagrams of a given word based on an internal word dictionary.  At least, that's what it's _supposed_ to do.  Continue reading for more details.

## Development

### Scripts

- `> ./gradlew build` - install dependencies
- `> ./gradlew test` - run unit tests
- `> ./gradlew run --args dictionary.txt` - run the server

### REST Service

After starting the server, the REST endpoint can be invoked using http://localhost:8090/anagram?term=WORD where *WORD* is the term to find anagrams for.  The response should be a JSON payload containing a string array of all matching anagrams.

## Problems

The project was abandoned before it could be completed.  It currently has the following issues:

* The included unit test fails
* The endpoint doesn't return correct results

