import { asyncHandler } from "../utils/asyncHandler.js";
import { Screen } from "../model/screen.model.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js";


const getAllScreens = asyncHandler(async(req, res) => {
    const screens = await Screen.find();

    return res
    .status(200)
    .json(new ApiResponse(200, screens, "screens are not fetch"))
})

const createMovies = asyncHandler(async (req, res) => {

    //1
    const {screenNumber, totalSeats} = req.body;
    console.log(res.body);

    if(!screenNumber && !totalSeats) {
        throw new ApiError(400,"all field required")
    }

    //2
    const screen = await Screen.create({
        screenNumber, totalSeats
    });

    return res
    .status(200)
    .json(new ApiResponse(200, screen, "screen created"))

})

const getScreenById = asyncHandler(async(req, res) => {

    const id = req.params.id

    const screen = await Screen.findById(id)

    return res
    .status(200)
    .json(new ApiResponse(200,screen, "movie fetch successfully by id"))
})

const updateScreen = asyncHandler(async(req, res) => {
    const {screenNumber, totalSeats} = req.body;
    const id = req.params.id;

    const screen = await Screen.findByIdAndUpdate(id,{
        screenNumber, totalSeats
    },{
        new: true, runValidators: true
    })

    return res
    .status(200)
    .json(new ApiResponse(200,screen, "movie fetch successfully by id"))

})

const deleteScreen = asyncHandler(async (req, res) => {

    const id = req.params.id

    const screen = await Screen.findByIdAndDelete(id)

    return res
    .status(200)
    .json(new ApiResponse(200, screen, "screen has been deleted successfully"))
})

export {getAllScreens, createMovies, getScreenById, updateScreen, deleteScreen}