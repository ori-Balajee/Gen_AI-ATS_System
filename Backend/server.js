require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const connectToDB = require("./config/database")
const authRoute = require('./routes/authRoute')

const app =express()
app.use(express.json())
app.use(cookieParser())
connectToDB()

// app.use()
app.use('/api/auth', authRoute);


app.listen(3000,()=>{
    console.log("server is running")
})