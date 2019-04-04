require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const Artist = require("../models/Artist");
const User = require("../models/User")
const Obra = require("../models/ObraMaestra");
const bcryptSalt = 10;
mongoose
  .connect(process.env.DBURL, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let artists = [
    {
      username: "Carlos",
      role:"Artist",
      password: bcrypt.hashSync("Carlos", bcrypt.genSaltSync(bcryptSalt)),
      profileImg:"https://pics.me.me/profile-rates-top-5-funniest-comments-win-funny-13854987.png",
      // obras:["https://66.media.tumblr.com/3f8869cb473431a7749e69074bfb81fd/tumblr_npu9p17PWX1qfcut3o1_1280.jpg",
      // "https://sr.gallerix.ru/1026713498/_EX/939465332.jpg  " ,
      //  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/REPIN_portret_REPIN.jpg/220px-REPIN_portret_REPIN.jpg"] 
    },
    {
      username: "Dan",  
      role:"Artist",
      password: bcrypt.hashSync("Dan", bcrypt.genSaltSync(bcryptSalt)),
      profileImg: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/07/funny-profile-pic7-300x256.jpg",
      // obras: ["https://cdn11.bigcommerce.com/s-vak6ug5w2j/images/stencil/500x659/products/22094/22491/Valentin_Serov_-_Portrait_of_Praskovia_Anatolievna_Mamontova_20x24_wunaoc__64870.1486486710.jpg?c=2&imbypass=on",
      //  "http://2.bp.blogspot.com/-_9SH_YnN1m0/UNb6uBpYIRI/AAAAAAAAAao/7SVdMoBsStc/s1600/Cornelis+van+der+Geest+(ca.+1620).+%C3%93.+s.+tabla,+37,5+x+32,5+cm.+The+National+Gallery,+Londres..jpg", 
      //  "https://img.posterlounge.co.uk/img/products/320000/310800/310800_poster_l.jpg"]
       
    }
  ]


  let obrasMaestras = [
    {title:"Retrato del compositor Modest Petróvich Músorgski",
    price: 200,
    año: 1860,
    image:"https://66.media.tumblr.com/3f8869cb473431a7749e69074bfb81fd/tumblr_npu9p17PWX1qfcut3o1_1280.jpg",
    description: "Retrato de un famoso compositor",
    author: "Carlos", 
     },
    {
     title:"Retrato MO Levenfeld",
     price: 300,
     año: 1880,
     image:"https://sr.gallerix.ru/1026713498/_EX/939465332.jpg",
     description: "Retrato de una dama de la época",
     author: "Carlos",
      
    },
    { 
    title:"La nueva chica de la perla",
    price: 80,
    año: 2005,
    image:"http://www.risasinmas.com/wp-content/uploads/2013/05/Johnny-Depp-de-la-perla.jpg",
    description: "Virtuosa interpretación de la chica de la perla",
    author: "Carlos",
     
       }, 
    {
      title:"Retrato de Praskovia Anatolievna Mamontova",
       price: 500,
       año: 1860,
        image:"http://www.sothebys.com/content/dam/stb/lots/L12/L12114/012L12114_5MYLR.jpg.webrend.1280.1280.jpeg",
        description: "Retrato de una dama de la época",
        author: "Dan",
         
       },
       {
        title:"La lechera lego",
        año: 2008,
        price: 400,
        image:"http://static.wixstatic.com/media/b844ec_557c3111122e47fe88d787b937fbeb48.jpg_srz_p_765_776_75_22_0.50_1.20_0.00_jpg_srz",
        description: "Interpretación de la lechera",
        author: "Dan",
         
       },
       
       {
       
        title:"La coronación de espinas",
        price: 200,
        año: 1860,
        image:"https://upload.wikimedia.org/wikipedia/commons/2/23/Anthonis_van_Dyck_004.jpg",
        description: "Una serie de soldados judíos hacen escarnio de Cristo",
        author: "Dan",
         
       },
       {title:"Autorretrato con brazo retorcido sobre la cabeza",
       price: 250,
       año: 1620,
       image:"https://cdn.20m.es/img2/recortes/2014/10/06/192291-583-849.jpg?v=20141006202159",
       description: "Autorretrato expresionista de torso desnudo",
       author: "Dan",
    },
  ]

  User.deleteMany()
  .then(() => {
    return Obra.deleteMany();
  })
  .then(() => {
    return User.create(artists)
  })
  .then((users) => {
    obrasMaestras = obrasMaestras.map(obra => {
      let id = users.find(user => user.username == obra.author)._id;
      Array.isArray(obra.author) ? obra.author.push(id) : obra.author = [id]
      return obra;
    })
    return Obra.insertMany(obrasMaestras)
    .then(obras => {
      return Promise.all(users.map(user => {
        let idObras = obras.filter(obra => obra.author.toString() == user._id.toString()).map(obra => obra._id)
        return user.update({obras:idObras})
      }))
    })
  })
  // .then(artistsCreated => {
  //   console.log(`${artistsCreated.length} artists created with the following id:`);
  //   console.log(artistsCreated.map(u => u._id));
  // })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
  