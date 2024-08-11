import express from "express";
import { createResume } from "../controller/resume.controller";

const router = express.Router();

//create a resume
router.post("/create", createResume);

export default router;
