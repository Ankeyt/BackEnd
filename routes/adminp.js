//This should be the route that handles the creation of the products which the admin of the shop can do.
const express=require('express') ;

const router =express.Router(); //this router is like a miniexpress app tied to other express app

// router.get('/',(req,res,next)=>{
//     // console.log("This always runs ")
//      next();
//   });
// /admin/add-product=>GET
  router.get('/login',(req,res,next)=>{
    // console.log("In the second middleware")
    
   // onsubmit="document.getElementById('username').value=localStorage.getItem('username')
     res.send(`<form action="/admin/add-message" method="POST" 
     onsubmit="localStorage.setItem('userdetails',document.getElementById('username').value)">
     <input type="text" name="username" id="username"><button type="submit">Add Username</button></form>`)
  });

//same paths can be used if methods differ
// /admin/add-product=>POST
//   router.post('/add-username',(req,res,next)=>{
   
//     console.log(req.body)
//     //console.log(res.body)
//     res.redirect('/admin/add-message')
// })

router.use('/add-message',(req,res,next)=>{
  // console.log("In the second middleware")
  //?username=${req.body.username}
  console.log(req.body)
   res.send(`<form action="/admin/add-data?username=${req.body.username}" method="POST" 
   onsubmit="localStorage.setItem('${req.body.username}',document.getElementById('message').value)">
   <input type="text" name="message" id="message">
   <button type="submit">Add Message</button></form>`)
});



router.post('/add-data',(req,res,next)=>{
   //local storage
   const {username} = req.query;//destructuring
  // console.log(username);
  console.log(req.body)
  
  const {message} = req.body;
  //console.log(message);
  
  res.send(`<h1>${username}:${message}</h1>`)
  //localStorage.setItem('username',JSON.stringify( arr))
  res.redirect('/')
})

module.exports=router;