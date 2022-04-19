const Mongoclient = require('mongodb').MongoClient;



function insertdbid(emailaddress, username){

const url = "mongodb://localhost:27017/";

Mongoclient.connect(url, function(err, db) {
    if(err) throw err;
     const dbo = db.db("dbid");
     const myobj = { emailaddress: emailaddress, namauser: username };
     dbo.collection("customers").insertOne(myobj, function(err,res) {
        if(err) {
           console.log("failed to insert dbid");
        db.close();
         }
       else if{
        console.log("1 document inserted");
        db.close();
       }
     });
});
}

export module = {insertdbid};


