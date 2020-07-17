import { Request, Response } from "express";
import webtoonsDAO from '../daos/WebtoonsDAO';

export const getAllWebtoon = (req: Request, res: Response) => {
    webtoonsDAO.getAllWebtoon((listWebtoon) => {
        res.send(listWebtoon);
    })
}