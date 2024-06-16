import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    movieName: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    showtime: {
      type: Date,
      required: true,
    },
    seats: {
      type: [String],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = mongoose.model("Booking", bookingSchema);
