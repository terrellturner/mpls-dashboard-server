import express from "express";
import {
  TotalPoliceIncidents,
  TotalNonEmergencyIncidents,
  TotalReportedCrimes,
  TotalConfirmedFires,
  TotalConstructionPermits,
} from "../controllers/statsController";

const router = express.Router();

router.route("/policeincidents").get(TotalPoliceIncidents);
router.route("/nonemergencyincidents").get(TotalNonEmergencyIncidents);
router.route("/crimes").get(TotalReportedCrimes);
router.route("/confirmedFires").get(TotalConfirmedFires);
router.route("/constructionValue").get(TotalConstructionPermits);

export default router;
