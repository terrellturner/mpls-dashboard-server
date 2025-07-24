import { NextFunction, Request, Response } from "express";
import PoliceIncidents from "../services/getPoliceIncidentsService";
import NonEmergencyIncidents from "../services/getNonEmergencyIncidents";
import CrimesReported from "../services/getTotalCrimesReported";
import ConfirmedFiresReported from "../services/getTotalConfirmedFires";
import GetTotalConstructionPermits from "../services/getTotalConstructionPermits";

//@desc     Get total 311 calls
//@route    GET request to /stats/api/nonemergencyincidents
//@access   Public
const TotalPoliceIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await PoliceIncidents());
};

//@desc     Get total 311 calls
//@route    GET request to /stats/api/nonemergencyincidents
//@access   Public
const TotalNonEmergencyIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await NonEmergencyIncidents());
};

//@desc     Get total reported crimes
//@route    GET request to /stats
//@access   Public
const TotalReportedCrimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await CrimesReported());
};

//@desc     Get total confirmed fires
//@route    GET request to /stats/api/confirmedFires
//@access   Public
const TotalConfirmedFires = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await ConfirmedFiresReported());
};

//@desc     Get total confirmed fires
//@route    GET request to /stats/api/constructionValue
//@access   Public
const TotalConstructionPermits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await GetTotalConstructionPermits());
};

export {
  TotalPoliceIncidents,
  TotalNonEmergencyIncidents,
  TotalReportedCrimes,
  TotalConfirmedFires,
  TotalConstructionPermits,
};
