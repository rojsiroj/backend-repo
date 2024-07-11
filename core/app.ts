import express, { Application, Response } from "express";
import dotenv from "dotenv";

const app: Application = express();
dotenv.config();

app.get("/", (_, res: Response) => res.send("Hello World!"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
