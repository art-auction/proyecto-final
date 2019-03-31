const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")
const Album = require("../models/Album")

router.get("/obras/:id", (req, res) => {
    
 Album.find({ "author": req.params.id }
 )
 
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
   
} )
// router.post("/postobra", (req, res)=>{  
//  Artist.find()
//    .then(data =>  res.json(dasta[0].obras.push("data")))
//    .catch(err=>console.log(err))
// })


 router.get("/artist-profile/:id", (req, res) => {
     Obra.find({ albumid: req.params.id})
     .populate("albumid")
     .then(data=>console.log(data))
     .catch(err=>console.log(err))
 })
 



module.exports = router;