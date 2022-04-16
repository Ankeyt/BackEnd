//const http = require('http');
const path=require('path');
const express=require('express')

const bodyParser=require('body-parser');
//const routes = require('./routes');

//console.log(routes.someText);
const app=express()


const adminroutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))//it serves static methods

app.use('/admin',adminroutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

// const server = http.createServer(app);

// server.listen(4000);
app.listen(4000)

