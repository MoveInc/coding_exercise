const express = require('express');
const AnagramService = require('./anagram-service');

const TERM_PARAM = 'term';

const app = express();
const port = 8000;
const service = new AnagramService('src/static/dictionary.txt');

app.get('/', async (req, res) => {
  let term = req.query[TERM_PARAM];
  if (!term || term.trim().length === 0) {
    res.status(400);
    res.send({error: 'query parameter "term" is required'});
    return;
  }

  let matches = await service.getAnagrams(term);
  res.send({matches});
});

service.loadDictionary()
  .then(() => {
    app.listen(port, () => console.log(`Server listening on port ${port}!`));
  });

