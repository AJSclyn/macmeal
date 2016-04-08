//  Require MongoDB
var mongodb = require('mongodb');

//  Initialize MongoClient
var mongoclient = mongodb.mongoclient;

//  Connect to URL.
var url = 'mongodb://localhost:8100/exampleDB';

//  Use connect method to connect to Server
MongoClient.connect(url, function(err, db){
  if(err){
    console.log('Unable to connect.', err);
  } else {
    console.log('Swaggy', url);

    db.close();
  }
})
