const client = require('../config/DBConnection');
const Webtoon = require('../models/Webtoon');

class WebtoonPgDAO {
  static getAllWebtoon(display) {
    client.connect();
    client.query('SELECT * FROM "JRead".webtoon', (err, res) => {
      const listWebtoon = [];
      res.rows.forEach((row) => {
        const webtoon = new Webtoon(row.id, row.name);
        listWebtoon.push(webtoon);
      });
      display(listWebtoon);
      client.end();
    });
  }
}

module.exports = WebtoonPgDAO;
