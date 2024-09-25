const express = require("express")
const app = express();


app.use("/home",(req,res)=>{
    res.send("This is the first call from home page")
})

app.use("/home/me",(req,res)=>{
    res.send("Helo ashok bhai")
})
app.get("/home",(req,res)=>{
    res.send("This is get call from home page")
})
app.post("/home",(req,res)=>{
    res.send("This is post call from home page")
})


app.use("/test",(req,res)=>{
    res.send("This is my test page")
})

app.listen(7777, ()=>{
    console.log("Server is running on port 7777")
})
