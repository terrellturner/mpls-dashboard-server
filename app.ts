import express, { Request, Response } from "express";
import publicApiRoutes from "./routes/publicApiRoutes";
const app = express();

const port = process.env.SERVER_PORT || 5555;

app.get("/", (req: Request, res: Response) => {
  res.send("Ping");
});

app.use("/stats", publicApiRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
