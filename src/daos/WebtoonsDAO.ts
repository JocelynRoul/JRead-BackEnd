import Webtoon from "../models/Webtoon";
import { getRepository, Repository } from 'typeorm';
import '../config/DBConnection'

class WebtoonDAO {

    static async getAllWebtoon(display: (arg: Webtoon[]) => void){
        const listWebtoon = await getRepository(Webtoon).find();
        display(listWebtoon);
    }
}

export default WebtoonDAO;