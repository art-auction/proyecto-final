require('dotenv').config();

const mongoose = require("mongoose");
const ObrasMaestra = require("../models/ObraMaestra");

mongoose
  .connect('mongodb://localhost/art-auction', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  let obrasMaestras = [
    {title:"Retrato del compositor Modest Petróvich Músorgski",
    price: 200,
    año: 1860,
    image:"https://66.media.tumblr.com/3f8869cb473431a7749e69074bfb81fd/tumblr_npu9p17PWX1qfcut3o1_1280.jpg",
    description: "Retrato de un famoso compositor",
    // author: {_id: "5ca36df305b3f130e4215713"}, 
     },
    {
     title:"Retrato MO Levenfeld",
     price: 300,
     año: 1880,
     image:"https://sr.gallerix.ru/1026713498/_EX/939465332.jpg",
     description: "Retrato de una dama de la época",
    //  author: {_id: "5ca36df305b3f130e4215713"},
      
    },
    { 
    title:"La nueva chica de la perla",
    price: 80,
    año: 2005,
    image:"http://www.risasinmas.com/wp-content/uploads/2013/05/Johnny-Depp-de-la-perla.jpg",
    description: "Virtuosa interpretación de la chica de la perla",
    // author: {_id: "5ca36df305b3f130e4215713"},
     
       }, 
    {
      title:"Retrato de Praskovia Anatolievna Mamontova",
       price: 500,
       año: 1860,
        image:"http://www.sothebys.com/content/dam/stb/lots/L12/L12114/012L12114_5MYLR.jpg.webrend.1280.1280.jpeg",
        description: "Retrato de una dama de la época",
        // author: {_id: "5ca36df305b3f130e4215714"},
         
       },
       {
        title:"La lechera lego",
        año: 2008,
        price: 400,
        image:"http://static.wixstatic.com/media/b844ec_557c3111122e47fe88d787b937fbeb48.jpg_srz_p_765_776_75_22_0.50_1.20_0.00_jpg_srz",
        description: "Interpretación de la lechera",
        // author: {_id: "5ca36df305b3f130e4215714"},
         
       },
       
       {
       
        title:"La coronación de espinas",
        price: 200,
        año: 1860,
        image:"https://upload.wikimedia.org/wikipedia/commons/2/23/Anthonis_van_Dyck_004.jpg",
        description: "Una serie de soldados judíos hacen escarnio de Cristo",
        // author: {_id: "5ca36df305b3f130e4215714"},
         
       },
       {title:"Autorretrato con brazo retorcido sobre la cabeza",
       price: 250,
       año: 1620,
       image:"https://cdn.20m.es/img2/recortes/2014/10/06/192291-583-849.jpg?v=20141006202159",
       description: "Autorretrato expresionista de torso desnudo",
      //  author: {_id: "5ca36df305b3f130e4215714"},
    },
  ]

  ObrasMaestra.deleteMany()
  .then(() => {
    return ObrasMaestra.create(obrasMaestras)
  })
  .then(obrasCreated => {
    console.log(`${obrasCreated.length} Obras created with the following id:`);
    console.log(obrasCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
  