import { Request, Response } from "express";
import webtoonDAO from '../daos/WebtoonsDAO';

export const getAllWebtoon = async (req: Request, res: Response) => {

    const webtoonList = await webtoonDAO.findAll();

    res.json(webtoonList);

}