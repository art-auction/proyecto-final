const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")

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


module.exports = router;