const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")
const User = require("../models/User")
//const Album = require("../models/Album")
const uploader = require('../configs/cloudinary-setup');


router.get("/obras", (req, res) => {
    User.find({role:"Artist"})
       .then(data=>{
           data = data.map(e => ({obras:e.obras, _id:e._id, username: e.username}))
        res.json(data)})
       .catch(err=>console.log(err))
      
   } )
   
   
    router.get("/artist-profile/:id", (req, res) => {
        User.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
    })
    

router.post("/postobra",uploader.single("obra"), (req, res)=>{  
 User.findByIdAndUpdate(req.user.id, {$push:{obras:req.file.secure_url}})
   .then(data =>  res.status(200).json(data))
   .catch(err=>console.log(err))
})


 



module.exports = router;