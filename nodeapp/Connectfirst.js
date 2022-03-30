const https = require("https");
const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const dbidcheck = require("./Dbidcheck");
const dbidinsert = require("./Insertdbid");
const dbidcheckm = require("./Dbidcheckm");
const dbidinsertm = require("./Insertdbidm");
const unamecheckconn = require("./UnameChecking");
const wss = require("ws");
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const WebSocketServer = wss.Server;

const avail = [];
const arrquenol = [];
const arrquen = [];
const ip = [];
const arrset = [];
const arrremov = [];

   myEmitter.on('event', function firstListener(arg1){
           if(arg1 === "available" && avail.length == 0){
              avail.push(arg1);
    console.log(avail[0]);
       
}
});


app.use('/', express.static('../my-app/build'));
app.use('/memberarea', express.static('../my-app/build'));
app.use(bodyParser.json());

app.post('/memberarea', function(req, res) {
if(req.body.uname !== undefined && req.body.pass !== undefined){
 unamecheckconn.unamecheck(req.body.uname, req.body.pass).then(function(checkuser){

     if(checkuser === "find"){
     res.send({"answer": "available"});

    console.log("find");




   }
    else if(checkuser === "notfind"){
      console.log("notfind");
}   
     });
}
});


app.post('/betweenuname', function(req, res) {
if(req.body.emailaddress !== undefined && req.body.currentuser !== undefined){
      dbidcheck.dbid(req.body.emailaddress, req.body.currentuser).then(function(checkdbid){
          
        if(checkdbid === "notfind"){
        dbidinsert.insertdbid(req.body.emailaddress, req.body.currentuser);
      console.log("notfind");
        if(avail[0] === "available"){
             console.log(avail[0]);
            res.send({"answer": "available"});
}
        else if(avail.length === 0){
             res.send({"answer": "notavailable"});
}
         
   }
     else if(checkdbid === "find"){
    if(avail[0] === "available"){
             console.log(avail[0]);
            res.send({"answer": "available"});
// Try to send from database record of chat to user chat window
}
        else if(avail.length === 0){
             res.send({"answer": "notavailable"});
}
    console.log("find");
  

   }   
     });
}
});


const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

var server = https.createServer(options, app);







server.listen(3000, 'testprog', function(req, res) {
              console.log("server started at port 5000");
}); 


let wssx = new WebSocketServer({
        server: server
});

wssx.on("connection", function connection(ws){
     

     ws.on("message", function incoming(message) {

 let newmessage = message.toString();
       let barumessage = JSON.parse(newmessage);

        let reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); 
console.log(barumessage);              
 console.log(barumessage.email);   
              
     if(barumessage.user === "admin" && barumessage.message === '' && avail.length == 0) {
             myEmitter.emit('event', "available");
                }
        else if(barumessage.user === "admin" && barumessage.message !== ''){
             console.log("masuk elseif pertama");
               let tomessage = newmessage.replace("user", "to");
                let toemail =  tomessage.replace("admin", arrquenol[0]);
wssx.clients.forEach(function(client) {
      if (client !== ws && client.readyState === wss.OPEN) {
        client.send(toemail);
}});
        }
      else if(barumessage.status === "userdown" && barumessage.email !== ''){
                    arrremov.length = 0;
              if(barumessage.email === arrquenol[0] && arrquen.length !== 0){
                    arrquenol.length = 0;
 
                 let firstemail = arrquen[0];
console.log(firstemail);
console.log("arquen[0]");

                   arrquenol.push(firstemail.email);
                 console.log(arrquenol);
                console.log("after dipush dgn firsemail");

                 for(let l=0; l < arrquen.length; l++){
                          let mailget = arrquen[l];
                      console.log(arrquen[l]);
                  console.log("isi arrquen yg mau dibroadcast");

                    if(firstemail.email === mailget.email){
                           wssx.clients.forEach(function(client) {
      if (client !== ws && client.readyState === wss.OPEN) {
        client.send(JSON.stringify(mailget));
}});
                    arrremov.push(l);
                  console.log(arrremov);
                console.log("isi dari arrremov neh");
}};
                            arrquen.splice(arrremov[0], arrremov.length);
              console.log(arrquen);
                  console.log("habis arrquen displice dengan arrremov");


}
           else {
             for(let k = 0; k < arrquen.length; k++){
                 let tempk = arrquen[k];
                     if(tempk.email === barumessage.email){
                             arrremov.push(k);
                 
 dbidcheckm.dbidm(tempk.email, tempk.message).then(function(checkdbid){

        if(checkdbid === "notfind"){
        dbidinsertm.insertdbidm(tempk.email, tempk.message);
}});
                   console.log(arrremov);
        console.log("arrremov isinya abis dipush dengan k");
}             

}                    
        arrquen.splice(arrremov[0], arrremov.length);
        console.log(arrquen);
        console.log("abis dilakukan arrremov setelah k");
                 }
}              
 
        
       else if(barumessage.status === "admindown" && barumessage.message === '') {
                   avail.length = 0;
      console.log(avail);
     console.log("isi dari avail setelah admindown");
wssx.clients.forEach(function(client) {
      if (client !== ws && client.readyState === wss.OPEN) {
        client.send(newmessage);
}});
                             
     
           }
         else if(reg.test(barumessage.email)){
           if(arrquenol.length != 0){
             console.log("arrquenol panjang != 0");
           if(arrquenol.includes(barumessage.email)){
                        console.log(arrquenol + "aftercheck");
            
wssx.clients.forEach(function(client) {
      if (client !== ws && client.readyState === wss.OPEN) {
        client.send(newmessage);
}});
                             
                       }
                else {  
                             arrset.length = 0;
            console.log("masuk jika panjang arrquenol panjang != 0 dan barumessageemail gak sama arrquenol");
                if(arrquen.length != 0){
                  for(let u=0; u < arrquen.length && u+1 < arrquen.length; u++){
                    let  emailch = arrquen[u];
                 let emailnext = arrquen[u+1];
            console.log(arrquen[u]);
                         console.log("emailch dot email yg selalu error");               
                    if(emailch.email === barumessage.email && emailnext.email !== barumessage.email){

                       arrset.push(u+1);          
                          console.log(arrquen);
                    console.log( "panjang arrquen bahkan != 0 dan arrset != 0");
                   break;   
}}
                      if(arrset.length != 0){
                         if(arrset[0] >= arrquen.length){
                      arrquen.push(barumessage);
                    console.log(arrquen);
                     console.log("arrquen dengan arrset sama dengan lengthnya");
}
else if(arrset[0] < arrquen.length){
                       arrquen.splice(arrset[0], 0, barumessage);
                      console.log(arrquen);
                  console.log("arrquen dgn arrset tak sama dengan lengthnya");
}}
 
                if(arrset.length === 0){
                        arrquen.push(barumessage);
                  console.log(arrquen);
             console.log( "gak nemu di list email arquen");
                      }
           
}

                    else {
                      arrquen.push(barumessage);
                       console.log(arrquen + "anggota pertama dari arquen");
}  
                  }
}
               else {
                arrquenol.push(barumessage.email);
                    console.log(arrquenol);
wssx.clients.forEach(function(client) {
      if (client !== ws && client.readyState === wss.OPEN) {
        client.send(newmessage);
}});
                             
             
                  }
    }
       });


});








