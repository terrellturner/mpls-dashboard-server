import { NextFunction, Request, Response } from "express";
import PoliceIncidents from "../services/getPoliceIncidentsService";
import NonEmergencyIncidents from "../services/getNonEmergencyIncidents";
import CrimesReported from "../services/getTotalCrimesReported";

const TotalPoliceIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@desc     Get total reported crimes
  //@route    GET request to /stats
  //@access   Public
  res.json(await PoliceIncidents());
};
const TotalNonEmergencyIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await NonEmergencyIncidents());
};

const TotalReportedCrimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await CrimesReported());
};

export {
  TotalPoliceIncidents,
  TotalNonEmergencyIncidents,
  TotalReportedCrimes,
};
