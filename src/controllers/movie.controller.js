import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Movie } from "../model/movie.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createMovie = asyncHandler(async (req, res) => {
  //1
  const { title, gerne, desc, cast, releaseDate, showtime } = req.body;
  console.log(title, gerne, desc, cast, releaseDate, showtime);

  //2
  if (!title || !showtime) {
    throw new ApiError(400, "title and showtime is required");
  }

  //3
  const movie = await Movie.create({
    title,
    gerne,
    desc,
    cast,
    releaseDate,
    showtime,
  });

  //4
  if (!movie) {
    throw new ApiError(400, "movie not created");
  }

  return res.status(200).json(new ApiResponse(200, movie, "new movie created"));
});

const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  console.log(movies);

  return res
    .status(200)
    .json(new ApiResponse(200, movies, "all movies are fetched successfully"));
});

const getMovieById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);

  if (!movie) {
    throw new ApiError(400, "movie not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, movie, "movie fetch successfully"));
});

const updateMovie = asyncHandler(async (req, res) => {
  const { title, gerne, desc, cast, showtime } = req.body;
  const id = req.params.id;

  const updatedMovie = await Movie.findByIdAndUpdate(id,{
    title,
    gerne,
    desc,
    cast,
    showtime,
  },
  {new:true, runValidators: true}
);

  if (!updatedMovie) {
    throw new ApiError(400, "movie not updated error found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedMovie, "movie updated successfully"));
});

const deleteMovie = asyncHandler(async(req, res) => {
    const id = req.params.id;

    const movie = await Movie.findByIdAndDelete(id)
    console.log(movie);

    return res
    .status(200)
    .json(new ApiResponse(200, movie, "movie deletes successfully"))

})

export { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };
