//import express from "express";
const express =require('express');
const app = express()
const port = 3000

app.use(express.json()); 


function login(req,res,next){
  
  console.log("Received request body:", req.body);
  const user_name="Nikhil"
  const pswd="1bc3"
  if (req.body.username !=user_name ||  req.body.password !=pswd){
    res.status(403).json({
      msg:"Incorrect credintials",
      sent:req.body.username

    })
  }
  else{
    next();
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})






app.post('/homepage',login,function(req,res){
  res.send('homepage')
});

//global catches 

app.use(function(err,req,res,next){
  res.json({
    msg:"someting is wrong in server we will be back:("
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})