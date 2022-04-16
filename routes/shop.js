// what the users see
const path=require('path');

const express=require('express')

const router =express.Router();

router.get('/',(req,res,next)=>{
    // console.log("In the second middleware")
     //res.send('<h1>Added</h1>')
     res.sendFile(path.join(__dirname,'../','views','shop.html'))
  });

  module.exports=router;