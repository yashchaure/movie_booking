import mongoose, { Schema } from "mongoose";

const seatSchema = new Schema({
    screen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Screen',
      required: true
    },
    seatNumber: {
      type: String,
      required: true
    },
    isBooked: {
      type: Boolean,
      default: false
    }
  }, {
    timestamps: true
  });

  export const Seats = mongoose.model("Seat", seatSchema);