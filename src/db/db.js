import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connect successfully");
    } catch (error) {
        console.log("Mongo DB is not connected", error);
    }
}

export {connectDB};