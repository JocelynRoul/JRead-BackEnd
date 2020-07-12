const webtoonDAO = require('../daos/WebtoonDAO');

exports.getAllWebtooon = (req, res) => {
  webtoonDAO.getAllWebtoon((listWebtoon) => {
    res.send(listWebtoon);
  });
};
