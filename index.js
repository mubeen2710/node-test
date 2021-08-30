const express =require('express');
let app=express();
app.listen(process.env.PORT,()=>{
    console.log("server started")
})
app.get("/",(req,res)=>{
    res.send("hi")
})