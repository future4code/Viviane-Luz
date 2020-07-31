import express from "express";
import { CreateController } from "../controller/CreateController";

export const createRouter = express.Router();



createRouter.post("/", CreateController.createBand);