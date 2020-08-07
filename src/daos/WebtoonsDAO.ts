import Webtoon from "../models/Webtoon";
import { getRepository} from 'typeorm';
import '../config/DBConnection'

const findAll = async (): Promise<Webtoon[]> => {
    return getRepository(Webtoon).find();
}

const webtoonDAO = {
    findAll
};

export default webtoonDAO;