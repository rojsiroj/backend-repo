import express, { Application, Response } from "express";

const app: Application = express();

app.get("/", (_, res: Response) => res.send("Hello World!"));

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
