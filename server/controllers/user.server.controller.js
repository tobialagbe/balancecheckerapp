// /**
//  * Created by TOBI ALAGBE on 9/4/2016.
//  */




// var User       = require('../models/user.server.model');


// module.exports = {



//     registerUser: function(req, res) {

//         User.find({}, function(err, users) {
//             if (users.length > 0) {
//                 return res.status(409).json({ message: 'Only one admin is allowed',user: users });
//                 // return res.send(users);
//             }


//             var user = new User({
//                 fullName: req.body.fullName,
//                 email: req.body.email,
//                 password: req.body.password
//             });

//             user.save(function(err, result) {
//                 if (err) {
//                     res.status(500).json({ message: err.message });
//                 }
//                 res.send({ status: "saved user" });
//             });
//         });
//     },




//     updateLoggedInUserDetail: function(req, res) {
//         User.findOne({ email: req.body.email }, function(err, user) {

//             if (!user) {
//                 return res.status(400).send({ message: 'User not found' });
//             }else if(user){
//                 if (user.password == req.body.password) {

//                                 user.fullName = req.body.newfullName || user.fullName;
//                                 user.email    = req.body.newemail || user.email;
//                                 user.password = req.body.newpassword || user.password;

//                                 user.save(function(err) {
//                                     if (err) throw err;
//                                     res.status(200).send({ message: 'Profile Update Succesfully'});
//                                 });

//                 }else{
//                     return res.status(400).send({ message: 'Invalid Credentials' });
//                 }
//             } //end of if user


//         });
//     },


//     authenticate: function(req, res) {

//         User.findOne({ email: req.body.email }, function(err, user) {
//             if (!user) {
//                 return res.status(401).json({ message: 'Invalid Email' });
//             }

//             user.comparePassword(req.body.password, function(err, isMatch) {
//                 if (err) {
//                    return res.status(400).json({ error: JSON.stringify(err) });
//                 }

//                 if (!isMatch) {
//                     return res.status(401).json({ message: 'Invalid Password' });
//                 }

//                 res.send({ status: "success" });
//             });
//         });
//     }
// };