import mongoose from "mongoose";
import { deflate } from "zlib";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    passward:{
        type: String,
        required: true, 
    },
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;