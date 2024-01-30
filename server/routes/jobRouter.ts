import { Router } from "express";
import {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
} from "../controllers/jobController.js";
const router = Router();
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);
router.route("/").get(getAllJobs).post(createJob);
export default router;
