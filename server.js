require("dotenv").config()
const express = require("express")
const connectToDB = require("./config/database")
const authRoute = require('./routes/authRoute')

const app =express()
app.use(express.json())
connectToDB()

app.use('/api/auth', authRoute);


app.listen(3000,()=>{
    console.log("server is running")
})