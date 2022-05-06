const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function dbidgived() {
try {
    await client.connect()
    const database = client.db('dbidcc');
    const custdata = database.collection('customerchat');
    /* Khusus hanya query dan tampilkan di chatcomponent */

        const exist = await custdata.find({}).toArray();
    if(exist  == null ){
      return "notfind";
    }       
    else if(exist != null){
            return exist;
}

await client.close();

}
catch(error){
console.error(error)
}

}


module.exports = {dbidgived};
