import { NextFunction, Request, Response } from "express";
import getPoliceIncidentsService from "../services/getPoliceIncidentsService";

const TotalCrimes = async (req: Request, res: Response, next: NextFunction) => {
  //@desc     Get total reported crimes
  //@route    GET request to /stats
  //@access   Public
  res.json(await getPoliceIncidentsService());
};

export default TotalCrimes;
