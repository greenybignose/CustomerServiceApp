const MongoClient = require('mongodb').MongoClient;


function dbid(emailadd, username){

const url = "mongodb://localhost:27017/";
const fine = "ok";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    const dbo = db.db("dbid");
    const query = { emailaddress: emailadd, namauser: username };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if(err) throw err;
          console.log(result);
          db.close();
           return fine;
});
});
};

module.exports = {dbid};
