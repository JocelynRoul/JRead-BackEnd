import { Request, Response } from "express";
import webtoonsDAO from '../daos/WebtoonsDAO';

export const getAllWebtoon = (req: Request, res: Response) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    webtoonsDAO.getAllWebtoon((listWebtoon) => {
        res.json(listWebtoon);
    })
}