import { nanoid } from "nanoid";
import { Request, Response } from "express";
let jobs = [
  {
    id: nanoid(),
    company: "Google",
    title: "Frontend",
  },
  {
    id: nanoid(),
    company: "Apple",
    title: "Backend",
  },
];
export const getAllJobs = async (req: Request, res: Response) => {
  res.status(200).json({ data: jobs });
};
