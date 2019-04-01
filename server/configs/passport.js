
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, userDocument);
    });
});

passport.use(new LocalStrategy(
    {//Esto hace que podamos usar req debajo para poder comprobar el role
     passReqToCallback: true
    }
    ,(req, username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
        if (err) {
            next(err);
            return;
        }
        if (!foundUser) {
            next(null, false, { message: 'Incorrect username.' });
            return;
        }
//Aquí se comprueba que el role del usuario en sesion sea el mismo que su rol en la base de datos
        console.log(req.body)
        if(req.body.role !== foundUser.role){
            next(null, false, {meessage: "Incorrect role"});
            return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            next(null, false, { message: 'Incorrect password.' });
            return;
        }
        next(null, foundUser);
    });
}));