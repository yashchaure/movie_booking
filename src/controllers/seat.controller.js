import { Seats } from "../model/seat.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createSeats = asyncHandler(async (req, res) => {
    const {seatNumber, screen, isBooked} = req.body;

    const seat = await Seats.create({
        seatNumber, screen, isBooked
    });

    return res
    .status(200)
    .json(new ApiResponse(200, seat, "seat create successfully"))

})

const getAllSeatsByScreen = asyncHandler(async(req, res) => {
    const screenId = req.params.id
    
    const seats = await Seats.find({screen: screenId});

    return res.status(200).json(new ApiResponse(200, seats, "all seats fetch successfully"))
})

export {createSeats, getAllSeatsByScreen}