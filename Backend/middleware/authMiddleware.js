const jwt = require("jsonwebtoken");
const blacklistToken = require("../models/blacklist")

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await blacklistToken.findOne({token});
    if(isTokenBlacklisted){
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch(e) {
        return res.status(401).json({
            message: "Invalid Token."
        })
    }
}

module.exports = {authMiddleware}