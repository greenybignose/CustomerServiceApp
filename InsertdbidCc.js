const Mongoclient = require('mongodb').MongoClient;



function insertdbidcc(emailadd, usermessage, admin, admmessage){

const url = "mongodb://localhost:27017/";
// hanya khusus tuk masuk ke db dari queuecomp, tuk ditampilkan di chatcomponent kemudian
Mongoclient.connect(url, function(err, db) {
    if(err) throw err;
     const dbo = db.db("dbidcc");
     const myobj = { emailaddress: emailadd, usermessages: usermessage, adm: admin, admmessages: admmessage };
     dbo.collection("customerchat").insertOne(myobj, function(err,res) {
        if(err) {
           console.log("failed to insert dbid");
        db.close();
         }
       else if(res){
        console.log("1 document inserted");
        db.close();
       }
     });
});
}

module.exports = {insertdbidcc};


