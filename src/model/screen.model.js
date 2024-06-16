import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
    layout: {
      type: [[String]],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = mongoose.model("Booking", bookingSchema);
