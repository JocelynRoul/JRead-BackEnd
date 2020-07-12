const express = require('express');

const router = express.Router();
const controllerWebtoon = require('../controllers/controllerWebtoons');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/webtoons', controllerWebtoon.getAllWebtooon);

module.exports = router;
