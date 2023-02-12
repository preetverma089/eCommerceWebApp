const http=require('http');
const express=require('express');
const mongoose=require('mongoose');
const app=express();


mongoose.connect('mongodb://localhost:27017',
  {
    useNewUrlParser: true,
  }
);
const db= mongoose.connection
db.on("open", function () {
    console.log("Connected successfully");
  });
app.use(express.json());


app.get('/',(req,res,next)=>{
    res.send("Hello World")
})
app.listen(3000,()=>{
    console.log(`server is starting at${3000}`)
});