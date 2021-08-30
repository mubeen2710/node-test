const express =require('express');
let app=express();
app.listen(5000,()=>{
    console.log("server started")
})
app.get("/",(req,res)=>{
    res.send("hi")
})