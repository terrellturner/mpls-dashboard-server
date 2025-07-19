import express from "express";
import {
  TotalPoliceIncidents,
  TotalNonEmergencyIncidents,
  TotalReportedCrimes,
} from "../controllers/statsController";

const router = express.Router();

router.route("/policeincidents").get(TotalPoliceIncidents);
router.route("/nonemergencyincidents").get(TotalNonEmergencyIncidents);
router.route("/crimes").get(TotalReportedCrimes);

export default router;
