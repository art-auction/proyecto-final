const express = require("express");
const router = express.Router();

const Artist = require("../models/Artist")
const User = require("../models/User")

const ObraMaestra = require("../models/ObraMaestra")
//const Album = require("../models/Album")
const uploader = require('../configs/cloudinary-setup');
const Puja = require('../models/Puja');



router.get("/obras", (req, res) =>{
  
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

router.post("/postpuja/:id", (req, res)=>{
    const {sms, user} = req.body;
    Puja.findOneAndUpdate({obra:req.params.id}, {$push:{pujaColection:{ $each:[{user, money:sms}], $position: 0 }}}, {new:true})
    .then(puja => {
        console.log(puja)
        res.json(puja)
    })
})

router.get("/getpuja/:id", (req, res)=>{
    console.log(req.params)
    Puja.findOne({obra:req.params.id})
    .then(puja =>{
        console.log(puja);
        res.json(puja)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.get("/deletobra/:id", (req, res)=>{
    //console.log(req.params)
    //console.log(req.user.obras.forEach(el=>console.log(el)))
    ObraMaestra.findByIdAndRemove({_id:req.params.id}, (err,obra)=>{})
       .then(obraMaestra=>res.json(obraMaestra))
       .catch(err=>console.log(err))
        // if(err) res.json(err)
        // else res.json("BORRADO")
    
})


module.exports = router;