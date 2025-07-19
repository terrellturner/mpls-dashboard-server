import express, { Request, Response } from "express";
import publicApiRoutes from "./routes/publicApiRoutes";
import policeIncidents from "./services/getPoliceIncidentsService";
import cors from "cors";

const app = express();

const port = process.env.SERVER_PORT || 5555;

app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: process.env.CORS_DOMAINS
      ? process.env.CORS_DOMAINS.split(",").map((item) => item.trim())
      : [],
    credentials: true,
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api/stats", publicApiRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("🌾🏙️🧮");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
