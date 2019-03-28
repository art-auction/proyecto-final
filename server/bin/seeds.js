const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Artist = require("../models/Artist");

const bcryptSalt = 10;
mongoose
  .connect('mongodb://localhost/art-auction', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let artists = [
    {
      username: "Carlos",
      password: bcrypt.hashSync("Carlos", bcrypt.genSaltSync(bcryptSalt)),
      profileImg:"https://pics.me.me/profile-rates-top-5-funniest-comments-win-funny-13854987.png",
      obras:{
         pic1: "https://66.media.tumblr.com/3f8869cb473431a7749e69074bfb81fd/tumblr_npu9p17PWX1qfcut3o1_1280.jpg",
         pic2: "https://i.pinimg.com/originals/f2/7a/0b/f27a0be020e99643ee8634e489547148.jpg",
         pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/REPIN_portret_REPIN.jpg/220px-REPIN_portret_REPIN.jpg",
      } 
    },
    {
      username: "Dan",
      password: bcrypt.hashSync("Dan", bcrypt.genSaltSync(bcryptSalt)),
      profileImg: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/07/funny-profile-pic7-300x256.jpg",
      obras: {
        pic1: "https://cdn11.bigcommerce.com/s-vak6ug5w2j/images/stencil/500x659/products/22094/22491/Valentin_Serov_-_Portrait_of_Praskovia_Anatolievna_Mamontova_20x24_wunaoc__64870.1486486710.jpg?c=2&imbypass=on",
        pic2: "http://2.bp.blogspot.com/-_9SH_YnN1m0/UNb6uBpYIRI/AAAAAAAAAao/7SVdMoBsStc/s1600/Cornelis+van+der+Geest+(ca.+1620).+%C3%93.+s.+tabla,+37,5+x+32,5+cm.+The+National+Gallery,+Londres..jpg", 
        pic3: "https://img.posterlounge.co.uk/img/products/320000/310800/310800_poster_l.jpg",

      }
    }
  ]


  Artist.deleteMany()
  .then(() => {
    return Artist.create(artists)
  })
  .then(artistsCreated => {
    console.log(`${artistsCreated.length} artists created with the following id:`);
    console.log(artistsCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
  