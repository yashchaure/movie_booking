import { app } from "./app.js";
import { connectDB } from "./src/db/db.js";
import dotenv from "dotenv";
dotenv.config();


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server started on port ${process.env.PORT}`);
    })
})
.catch( (error) => {
    console.log("error app not started",error);
})

