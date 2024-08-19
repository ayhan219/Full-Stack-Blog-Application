const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const authRoutes = require("./routes/Auth");
const postRoutes = require("./routes/Posts");

const dotenv = require("dotenv");
dotenv.config();


app.use(cors())
app.use(express.json())

app.use("/api/auth/",authRoutes);
app.use("/api/posts",postRoutes)

const connectDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected To DB successfully");
    } catch (error) {
        console.log(error);
        
    }
    
}
app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`Server is listening on port ${process.env.PORT}`);
    
})