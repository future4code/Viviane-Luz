import {CreateBusiness} from '../business/BandBusiness';
import { Request, Response, request } from "express";
import { Authenticator } from '../services/Authenticator';

export class BandController{
    static createBand(arg0: string, createBand: any) {
        throw new Error("Method not implemented.");
    }
    public async createBand(req: Request, res: Response){

        try{
            const token = req.headers.authorization!;

            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token)

        }catch(error){
            res.status(400).send({error: error.message})
        }

    }
}