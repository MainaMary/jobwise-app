import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import jobRouter from "../routes/jobRouter";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  console.log("Server working");
});
app.use("api/v1/jobs", jobRouter);
//Not found middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});
//Error middleware
app.use((req, res, next) => {
  res.status(500).json({ msg: "Something went wrong" });
});
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});
