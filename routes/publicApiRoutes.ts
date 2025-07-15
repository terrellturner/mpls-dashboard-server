import express from "express";
import TotalCrimes from "../controllers/statsController";

const router = express.Router();

router.route("/").get(TotalCrimes);

export default router;
