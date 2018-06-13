var express = require('express');
var router = express.Router();

router.get('/:name/:id([0-9]{5})', function(req, res) {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
router.post('/', function(req, res) {
  res.send('POST route on things.');
});

//Other routes here
router.get('*', function(req, res) {
  res.send('Sorry, this is an invalid URL.');
});

// export this router to use in our index.js
module.exports = router;
