import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    gerne: {
      type: String,
    },
    desc: {
      type: String,
    },
    cast: {
      type: String,
    },
    releaseDate: {
      type: String,
    },
    showtime: {
      type: [Date],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model("Movie", movieSchema);
