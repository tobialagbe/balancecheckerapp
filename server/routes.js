/**
 * Created by TOBI ALAGBE on 9/4/2016.
 */

var User = require('./controllers/user.server.controller');

var Data = require('./controllers/data.server.controller');

var fs = require('fs');

var path = require('path');




module.exports = function(app,formidable) {

    app.post('/signup', User.registerUser);

    app.post('/update', User.updateLoggedInUserDetail);

    app.post('/login', User.authenticate);

    app.post('/createstory', Data.createStory);

    app.post('/addchatter', Data.addChatter);

    app.get('/fetchstory', Data.fetchStory);






    app.post('/upload', function(req, res){

        // create an incoming form object
        var form = new formidable.IncomingForm();

        // specify that we want to allow the user to upload multiple files in a single request
        form.multiples = true;

        // store all uploads in the /uploads directory
        form.uploadDir = path.join(__dirname, '/res');


        // every time a file has been uploaded successfully,
        // rename it to it's orignal name
        form.on('file', function(field, file) {
            // fs.rename(file.path, path.join(form.uploadDir, file.name));
            fs.rename(file.path, path.join(form.uploadDir, "avatar.gif"));
            console.log("the file type is: " + file.type );
        });

        // log any errors that occur
        form.on('error', function(err) {
            console.log('An error has occured: \n' + err);
        });

        // once all the files have been uploaded, send a response to the client
        form.on('end', function() {
            res.end('success');
        });

        // parse the incoming request containing the form data
        form.parse(req);

    });











};