import express from "express";
const app = express();
const port = process.env || 5000;
app.get("/", (req, res) => {
  console.log("Server working");
});
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});
// import express, { Express, Request, Response } from "express";
// import dotenv from "dotenv";
// dotenv.config();
// const app: Express = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + Typescript server");
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
console.log("Hello world hello");
function addNumbers(a: number, b: number) {
  return a + b;
}
addNumbers(2, 3);
console.log(addNumbers(5, 6));
// build a simple login application
// with username and password
// registration screen
// authenticate the user to login and arrive at a dashboard
