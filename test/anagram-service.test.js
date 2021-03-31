const AnagramService = require('../src/anagram-service');

test('should load a dictionary and find anagrams', async () => {
  let service = new AnagramService('test/test-list.txt');
  await service.loadDictionary();

  let results = await service.getAnagrams('friend');

  const expected = ['finder', 'friend', 'redfin', 'refind'];
  expect(results).toEqual(expect.arrayContaining(expected));
});
