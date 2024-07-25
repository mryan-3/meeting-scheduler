import { Router } from "express";
import meetingRouter from "./meetingGroup.js";

const router = Router();

router.use('/meetings', meetingRouter)
export default router;
