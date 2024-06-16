import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import {User} from "../model/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {refreshToken, accessToken}
        
    } catch (error) {
        console.log(error);
    }
}

const userRegister = asyncHandler(async (req, res) => {
    //1
    const {name, email, password, age, adress} = req.body;
    console.log(name, email, password, age, adress);

    //2
    if(!name){
        throw new ApiError(400, "name field is empty")
    }
    if(!email){
        throw new ApiError(400, "email field is empty")
    }
    if(!password){
        throw new ApiError(400, "password field is empty")
    }
    if(!age){
        throw new ApiError(400, "age field is empty")
    }
    if(!adress){
        throw new ApiError(400, "adress field is empty")
    }

    //3
    const existedUser = await User.findOne({email});

    //4
    if(existedUser) {
        throw new ApiError(400, "User is already signUp")
    };

    //5
    const user = await User.create({
        name,
        email,
        password,
        age,
        adress
    });

    //6
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    return res
    .status(200)
    .json(new ApiResponse(200, user, "User Register Succesfully"))

})

const userLogin = asyncHandler(async(req, res) => {

    //1
    const { email, password} = req.body;
    console.log(email, password);

    //2
    if(!password || !email){
        throw new ApiError(400, "all field are Required")
    }

    //3
    const user = await User.findOne({email})
    //4
    if(!user){
        throw new ApiError(400, "User not available ")
    }
//-----------
    //5
    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(400, "password is incorrect ")
    }

    //6
    const {refreshToken, accessToken} = generateAccessAndRefreshToken(user._id);

    //7
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken,options)
    .json(new ApiResponse(200, {user: loggedInUser, accessToken, refreshToken}, "user logged in successfully"))


})

export {userRegister, userLogin};
