import mongoose, { Schema } from "mongoose";

const screenSchema = new Schema({
  screenNumber: {
    type: Number,
    required: true
  },
  totalSeats: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export const Screen = mongoose.model('Screen', screenSchema);
