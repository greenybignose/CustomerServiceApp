const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function dbidcc(emailadd, usermessage, admin, admmessage) {
try {
    await client.connect()
    const database = client.db('dbidcc');
    const custdata = database.collection('customerchat');
    /* Khusus tuk masuk dari adminchat window tuk tampil di chatcomponent, hanya tuk masuk */

    const query = { emailaddress: emailadd, usermessages: usermessage, adm: admin, admmessages: admmessage};
    const exist = await custdata.findOne(query, {emailaddress: 1, usermessages: 1, adm: 1, admmessages: 1, 
_id: 0});
    if(exist  == null ){
      return "notfind";
    }       
    else if((exist != null) && (query.emailaddress === exist.emailaddress) && 
        (query.usermessages === exist.usermessages) && (query.adm === exist.adm) && (query.admmessages ===
          exist.admmessages)){
            return "find";
}

await client.close();

}
catch(error){
console.error(error)
}

}


module.exports = {dbidcc};

