const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")
const User = require("../models/User")

const ObraMaestra = require("../models/ObraMaestra")
//const Album = require("../models/Album")
const uploader = require('../configs/cloudinary-setup');


// router.get("/obras", (req, res) => {
//     User.find({role:"Artist"})
//        .then(data=>{
//            data = data.map(e => ({obras:e.obras, _id:e._id, username: e.username}))
//         res.json(data)})
//        .catch(err=>console.log(err))
      
//    } )

router.get("/obras", (req, res) =>{
    // User.findById({}, (err, obrasMaestras)=>{
    //     User.populate(obrasMaestras, {path: "author"},(err, obrasMaestras)=>{
    //         console.log(obrasMaestras)
    //         res.status(200).json(obrasMaestras)
    //     })
    // })
    console.log("entra")
    User.find({role:"Artist"})
    .populate("obras")
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
   


   
    router.get("/artist-profile/:id", (req, res) => {
        User.findById(req.params.id)
        .populate("obras")
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
    })
    router.get("/subasta/:id", (req, res)=>{
        ObraMaestra.findById(req.params.id)
       .then(data =>res.json(data))
       .catch(err=>console.log(err))   
    })

router.post("/postobra",uploader.single("obra"), (req, res)=>{  

    const {secure_url} = req.file;
    const newObra = new ObraMaestra({
        image: secure_url
    })
    newObra.save()
    .then(obra => {
        console.log(req.user)
        User.findByIdAndUpdate(req.user._id, {$push:{obras:obra._id}})
          .then(data =>  res.status(200).json(data))
        })
        .catch(err=>console.log(err))
})


router.get("/subasta/:id", (req, res)=>{
    Obras.findById()
    .then(data => console.log(res.data))
})



module.exports = router;