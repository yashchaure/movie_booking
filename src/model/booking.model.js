import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  screen: {
    type: Schema.Types.ObjectId,
    ref: 'Screen',
    required: true
  },
  seats: [{
    type: Schema.Types.ObjectId,
    ref: 'Seat',
    required: true
  }],
  showtime: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export const Booking = mongoose.model('Booking', bookingSchema);