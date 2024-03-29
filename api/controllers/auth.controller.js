import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';    //this is for passward hide

export const signup  = async (req, res) =>{
    const {username, email, passward} = req.body;
    
    const hashedPassward = bcryptjs.hashSync(passward,10);
    const newUser = new User({username, email, passward: hashedPassward});

    try {await newUser.save()
         res.status(201).json('User created successfully');
    } catch (error){
        res.status(500).json(error.message);
    }
};