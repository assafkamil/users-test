import express, { Request, Response } from "express";
import { json } from "body-parser";

const app = express();
app.use(json());
const port = 3000;

app.get("/hello", (request: Request, response: Response) => {
  response.status(200).json({status: 200});
});

app.listen(port, () => {
  console.log(`Users app running on ${port}.`);
});

export default app;