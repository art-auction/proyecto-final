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
      
    },
    {
      username: "Dan",
      password: bcrypt.hashSync("Dan", bcrypt.genSaltSync(bcryptSalt)),
      profileImg: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/07/funny-profile-pic7-300x256.jpg",
      
       
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
  