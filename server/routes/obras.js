const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")

router.get("/obras", (req, res) => {
 Artist.find()
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
    //res.json(console.log(res.data))
} )



module.exports = router;