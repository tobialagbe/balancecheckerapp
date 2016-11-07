// require('dotenv').load();


var express       = require('express'),
    morgan        = require('morgan'),
    bodyParser    = require('body-parser'),
    cors          = require('cors'),
    route         = require('./server/routes'),
    sql           = require("seriate") 

    ;




var config = {  
    "server": "62.173.41.94",
    "user": "ivrserver",
    "password": "serveradmin",
    "database": "FBData"
};


sql.setDefaultConfig( config );


var port = process.env.PORT || 3000;





/**
 * Create Express server.
 */
var app = express();





app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true})); //use bodyParser for request and parsing info
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public')); //use to serve static files like favicon, css, angular and the rest
app.use(express.static( __dirname + '/server/res')); //use to serve static files like favicon, css, angular and the rest




/**
 * Routes Configuration
 */
// route(app);

//configure any route whatsoever to redirect to angular
app.get('*', function(req, res) {
    /** frontend routes =========================================================
     * route to handle all angular requests
     * load the single view file (angular will handle the page changes on the front-end)
     **/
    res.sendFile(__dirname + '/public/index.html' );
});






var myTable = "FB_TEST";  

// sql.execute( {  
//         // query: "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = @tableName",
//         query: "SELECT TOP 1 * FROM FB_TEST",
//         // params: {
//         //     tableName: {
//         //         type: sql.NVARCHAR,
//         //         val: myTable,
//         //     }
//         // }
//     } ).then( function( results ) {
//         console.log( JSON.stringify(results) );
//     }, function( err ) {
//         console.log( "Something bad happened:", err );
//     } );




app.post('/query', function (req, res) {

    sql.execute( {  
        // query: "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = @tableName",
        query: "SELECT TOP 1 * FROM FB_TEST WHERE PIN = @pin",
        params: {
            tableName: {
                type: sql.NVARCHAR,
                val: myTable,
            },
        
        pin: req.body.pin

        }
        

    } ).then( function( results ) {
        console.log( JSON.stringify(results) );
        res.send(JSON.stringify(results));
    }, function( err ) {
        console.log( "Something bad happened:", err );
        res.send(false);
    } );

  
});













app.listen( port,'0.0.0.0', function(){
    console.log("balance checker Server Listening on port ", port );
});



