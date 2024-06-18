import { Router } from "express";
import { createSeats, getAllSeatsByScreen } from "../controllers/seat.controller.js";


const router = Router();

router.route("/create").post(createSeats);
router.route("/screen/:screenId").get(getAllSeatsByScreen);


export default router;