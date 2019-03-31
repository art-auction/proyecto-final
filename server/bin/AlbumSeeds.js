const mongoose = require("mongoose");
const Obra = require("../models/Obra");

mongoose
  .connect('mongodb://localhost/art-auction', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  let obras = [
    {title:"Retrato del compositor Modest Petróvich Músorgski",
    image:"https://66.media.tumblr.com/3f8869cb473431a7749e69074bfb81fd/tumblr_npu9p17PWX1qfcut3o1_1280.jpg",
    description: "Retrato de un famoso compositor",
    author: {_id: "5c9fb554d667b205fd29bbfb"}, 
     },
    {
     title:"Retrato MO Levenfeld",
     image:"https://sr.gallerix.ru/1026713498/_EX/939465332.jpg",
     description: "Retrato de una dama de la época",
     author: {_id: "5c9fb554d667b205fd29bbfb"},
      
    },
    { 
    title:"La nueva chica de la perla",
    image:"http://www.risasinmas.com/wp-content/uploads/2013/05/Johnny-Depp-de-la-perla.jpg",
    description: "Virtuosa interpretación de la chica de la perla",
    author: {_id: "5c9fb554d667b205fd29bbfb"},
     
       }, 
    {
      title:"Retrato de Praskovia Anatolievna Mamontova",
        image:"http://www.sothebys.com/content/dam/stb/lots/L12/L12114/012L12114_5MYLR.jpg.webrend.1280.1280.jpeg",
        description: "Retrato de una dama de la época",
        author: {_id: "5c9fb554d667b205fd29bbfb"},
         
       },
       {
       
        title:"La lechera lego",
        image:"http://static.wixstatic.com/media/b844ec_557c3111122e47fe88d787b937fbeb48.jpg_srz_p_765_776_75_22_0.50_1.20_0.00_jpg_srz",
        description: "Interpretación de la lechera",
        author: {_id: "5c9fb554d667b205fd29bbfc"},
         
       },
       
       {
       
        title:"La coronación de espinas",
        image:"https://upload.wikimedia.org/wikipedia/commons/2/23/Anthonis_van_Dyck_004.jpg",
        description: "Una serie de soldados judíos hacen escarnio de Cristo",
        author: {_id: "5c9fb554d667b205fd29bbfc"},
         
       },
       {title:"Autorretrato con brazo retorcido sobre la cabeza",
       image:"https://cdn.20m.es/img2/recortes/2014/10/06/192291-583-849.jpg?v=20141006202159",
       description: "Autorretrato expresionista de torso desnudo",
       author: {_id: "5c9fb554d667b205fd29bbfc"},
    },
  ]

  Obra.deleteMany()
  .then(() => {
    return Obra.create(obras)
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
  