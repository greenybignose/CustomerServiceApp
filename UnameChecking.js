const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function unamecheck(username, password) {
try {
    await client.connect()
    const database = client.db('dbuname');
    const custdata = database.collection('idlist');
    // Query for a movie that has the title 'Back to the Future'
    const query = { uname: username, passwd: password };
    const exist = await custdata.findOne(query, {uname: 1, passwd: 1, _id: 0});
    if(exist  == null ){
      return "notfind";
    }       
    else if((exist != null) && (query.uname === exist.uname) && 
        (query.passwd === exist.passwd)){
            return "find";
}

await client.close();

}
catch(error){
console.error(error)
}

}


module.exports = {unamecheck};

