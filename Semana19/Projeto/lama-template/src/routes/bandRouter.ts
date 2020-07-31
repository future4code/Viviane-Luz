import express from "express";
import { BandController } from "../controller/BandController";

export const createRouter = express.Router();



createRouter.post("/", BandController.createBand);