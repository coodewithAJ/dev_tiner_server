const express = require("express")
const app = express();

app.use("/home",(req,res)=>{
    res.send("This is my home page")
})

app.use("/test",(req,res)=>{
    res.send("This is my test page")
})

app.listen(7777, ()=>{
    console.log("Server is running on port 7777")
})