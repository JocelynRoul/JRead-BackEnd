import express from 'express';
import * as webtoonsController from '../controllers/WebtoonsController';

const router = express.Router();;

router.get('/', (req, res) => {
    res.send('index');
});

router.get('/webtoons', webtoonsController.getAllWebtoon);

export default router;
