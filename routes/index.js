const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TP8: Mini Bibliothèque' });
});

module.exports = router;
