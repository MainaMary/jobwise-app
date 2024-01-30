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
const getAllJobs = async (req: Request, res: Response) => {
  res.status(200).json({ data: jobs });
};
const createJob = async (req: Request, res: Response) => {
  const { company, title } = req.body;
  if (!company || !title) {
    res.status(400).json({ msg: "Please provide all details" });
    return;
  }
  const id = nanoid(10);
  const job = { id, company, title };
  jobs.push(job);
  res.status(201).json({ job });
};
const getJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with ${id} found` });
  }
  res.status(200).json({ job });
};
const updateJob = async (req: Request, res: Response) => {
  const { company, title } = req.body;
  const { id } = req.params;
  if (!company || !title) {
    res.status(404).json({ msg: "Please provide all details" });
    return;
  }
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with ${id} found` });
  }
  job.company = company;
  job.title = title;
  res.status(200).json({ job });
};
const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ msg: `No job with ${id} found` });
  }

  const filteredJobs = jobs.filter((job) => job.id !== id);
  jobs = filteredJobs;
  res.status(200).json({ job });
};
export { getAllJobs, createJob, getJob, updateJob, deleteJob };
