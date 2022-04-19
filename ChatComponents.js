import React, {useEffect, useMemo, useState} from 'react';
import QueueComp from './QueueComp';
import BlockChat from './BlockChat';

const ChatComponents = () => {

const inblockchat = [];
  const [inblockch, setInblockch]  = useState([]);

     const [updatets, setUpdatets] = useState([]);



const timestamp = [];

const updatefunc = async () => {



        let datau = { "givemedata": "yes" };
await fetch("https://159.203.39.197:3000/memberarea", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) =>  response.json()
       ).then(function(data){
if(data.length != 0){

for(let v=0; v < data.length; v++){

     if(v == data.length - 1){
         timestamp[0] = data[v]._id.toString().substring(0,8);
}

       inblockchat.push(<BlockChat dapatdata={data[v]} />);
   
       }

              let  newts = {...updatets};
                     newts = timestamp;
            setUpdatets(newts);

               let uinblock = {...inblockch};
                     uinblock = inblockchat;
               setInblockch(uinblock);                


console.log(newts);  
}
       }); 


}


const updatepermin = async () => {

            let dataupdate = updatets[0];

        let datau = { "givemedata": dataupdate };
await fetch("https://159.203.39.197:3000/memberarea", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) =>  response.json()
       ).then(function(data){
if(data.length != 0){

for(let v=0; v < data.length; v++){

     if(v == data.length - 1){
         timestamp[0] = data[v]._id.toString().substring(0,8);
}

       inblockchat.push(<BlockChat dapatdata={data[v]} />);
   
       }

           if(updatets[0] !== timestamp[0]){
              let  newts = {...updatets};
                     newts = timestamp;
            setUpdatets(newts);


               let uinblock = {...inblockch};
                     uinblock = inblockchat;
               setInblockch(uinblock);                
console.log(newts);
	   }

 
}
       }); 


}

useEffect(() => {
    updatefunc();
}, []);

useEffect(() => {
   let timfunc = setTimeout(() => {updatepermin()}, 60000);
       console.log(timfunc);
    return () => clearTimeout(timfunc);

}, [updatets[0]]);



return(
<>
<div>
{inblockch}
</div>
<div>
<QueueComp/>
</div>



</>

);
}


export default ChatComponents;

