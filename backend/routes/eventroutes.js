import express from "express";
import {createEvent,getAllEvents, getEventById, registerForEvent, getMyEvents, deleteEvent} from "../controllers/eventcontroller.js";

import { authMiddleware } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createEvent);
router.get("/", getAllEvents);
router.get("/my-events", authMiddleware, getMyEvents);
router.get("/:id", getEventById);
router.post("/:id/register", authMiddleware, registerForEvent);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
