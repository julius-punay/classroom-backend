import express from "express";
import cors from "cors";

import subjectsRouter from "./route/subject";

const app = express();
const PORT = 8000;

if (!process.env.FRONTEND_URL)
  throw new Error("FRONTEND_URL is not set in .env file");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
