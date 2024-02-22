//import express from "express";
const express =require('express');
const app = express()
const port = 3000




function login(req,res,next){
  if (req.username!=user_name ||  req.paswd!=pswd){
    res.status(403).json({
      msg:"Incorrect credintials"
    })
  }
  else{
    next();
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})






app.get('/homepage',login,function(req,res){
  app.send('homepage')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})