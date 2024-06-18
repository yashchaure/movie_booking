import { Router } from "express";
import { createMovies, deleteScreen, getAllScreens, getScreenById, updateScreen } from "../controllers/screen.controller.js";

const router = Router();

router.route("/all").get(getAllScreens);
router.route("/create").post(createMovies);
router.route("/:id").get(getScreenById);
router.route("/:id").post(updateScreen);
router.route("/:id").delete(deleteScreen);

export default router;