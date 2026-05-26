import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
