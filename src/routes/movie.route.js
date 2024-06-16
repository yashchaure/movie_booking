import { Router } from "express";
import { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie } from "../controllers/movie.controller.js";

const router = Router();

router.route("/create").post(createMovie);
router.route("/all").get(getAllMovies);
router.route("/:id").get(getMovieById);
router.route("/:id").post(updateMovie);
router.route("/:id").delete(deleteMovie);


export default router;