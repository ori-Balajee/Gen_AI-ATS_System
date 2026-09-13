const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require('../models/blacklist');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400).json({
            success: false,
            message: "Please provide username, email and password"
        })
    }

    const isUserAlreadyExist = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (isUserAlreadyExist) {
        res.status(400).json({
            success: false,
            message: "User already Exist"
        })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)

    res.status(201).json({
        success: true,
        message: "User is registered",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({
            success: false,
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    },
    process.env.JWT_SECRET,
    {expiresIn:"1d"})

    res.cookie("token",token)
    res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email
    })
}

const logoutUser = async(req,res)=>{
    const token = req.cookies.token;
    if(!token){
        await tokenBlacklistModel.create({token})
    }

    res.clearCookie("token");

    res.status(200).json({
        message: "User logged out successfully"
    })
}

const getMe = async(req,res)=>{
    const user = await User.findById(req.user.id);
    res.status(200).json({
        id:user._id,
        username: user.username,
        email: user.email
    })
}

module.exports = { registerUser, loginUser, logoutUser, getMe }