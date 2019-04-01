const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")
//const Album = require("../models/Album")

router.get("/obras", (req, res) => {
    Artist.find()
       .then(data=>res.json(data))
       .catch(err=>console.log(err))
      
   } )
   
   
    router.get("/artist-profile/:id", (req, res) => {
        Artist.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
    })
    

router.post("/postobra", (req, res)=>{  
    console.log(req);
 Artist.findByIdAndUpdate(req.user.id, {$push:{obras:req.body}})
   .then(data =>  res.json(data[0].obras.push("data")))
   .catch(err=>console.log(err))
})


 



module.exports = router;