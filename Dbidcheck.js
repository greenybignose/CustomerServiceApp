const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function dbid(emailadd, username) {
try {
    await client.connect()
    const database = client.db('dbid');
    const custdata = database.collection('customers');
    // Query for a movie that has the title 'Back to the Future'
    const query = { emailaddress: emailadd, namauser: username };
    const exist = await custdata.findOne(query, {emailaddress: 1, namauser: 1, _id: 0});
    if(exist  == null ){
      return "notfind";
    }       
    else if((exist != null) && (query.emailaddress === exist.emailaddress) && 
        (query.namauser === exist.namauser)){
            return "find";
}

await client.close();

}
catch(error){
console.error(error)
}

}


module.exports = {dbid};

