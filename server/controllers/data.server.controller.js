// /**
//  * Created by TOBI ALAGBE on 9/4/2016.
//  */






// var Data       = require('../models/data.server.model');


// module.exports = {



//     createStory: function(req, res) {

//         Data.find({}, function(err, data) {

//             console.log(data);
//           if (data.length > 0) {

//              var existingData = data[0];

//                  existingData.remove(function(err) {
//                         if (err) throw err;

//                         console.log('story successfully deleted!');
//                 });

//             }


//             var story = new Data({

//                 storyId: req.body.storyId,
//                 chatter: req.body.chatter
//             });

//             story.save(function(err, result) {
//                 if (err) {
//                     res.status(500).json({ message: err.message });
//                 }
//                 res.send({ status: "created story" });
//             });






//         });
//     },




//     addChatter: function(req, res) {

//         Data.findOne({ storyId: req.body.storyId }, function(err, data) {
//             if (!data) {
//                 return res.status(400).send({ message: 'story not found' });
//             }

//             var newChatter = req.body.chatter;
//             data.chatter.push(newChatter);


//             data.save(function(err) {
//                 if (err) throw err;
//                 res.status(200).send({ message: 'chatter added'});
//             });

//         });




//     },


//     fetchStory: function(req, res) {

//         Data.find({}, function(err, data) {
//             if (data.length > 0) {
//                 return res.status(200).json(data);
//             }else{
//                 return res.status(400).json({status:"No Existing story, thats weird!"});
//             }

//         });
//     }









// };