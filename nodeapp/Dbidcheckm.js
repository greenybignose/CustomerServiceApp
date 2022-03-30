const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function dbidm(email, message) {
try {
    await client.connect()
    const database = client.db('dbidmessage');
    const custdata = database.collection('customers');
    // Query for a movie that has the title 'Back to the Future'
    const query = { emailaddress: email, message: message };
    const exist = await custdata.findOne(query, {emailaddress: 1, message: 1, _id: 0});
    if(exist  == null ){
      return "notfind";
    }       
    else if((exist != null) && (query.emailaddress === exist.emailaddress) && 
        (query.message === exist.message)){
            return "find";
}

await client.close();

}
catch(error){
console.error(error)
}
}

module.exports = {dbidm};



