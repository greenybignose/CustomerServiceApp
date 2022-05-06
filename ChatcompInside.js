import React, {useEffect, useMemo, useState} from 'react';
import QueueComp from './QueueComp';
import BlockChat from './BlockChat';

const ChatcompInside = () => {



const inblockchat = [];
  const [inblockch, setInblockch]  = useState([]);

      const [mupdate, setMupdate] = useState([]);



const takeout = (moreupdates) => {
     console.log(moreupdates + "isi dari moreupdates");
                   setMupdate(mupdate => [...mupdate, moreupdates]);
     console.log("isi dari mpudate neh" + mupdate[0]);     
           
}


const updatefunc = async () => {



        let datau = { "givemedata": "yes", "sourcenya": "memberarea" };
await fetch("https://www.primer-logistics.com", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) => response.json())
.then(function(data){
if(data.length !== 0){


for(let v=0; v < data.length; v++){

let dataurai = {"fromuserc": data[v].emailaddress, "usermessages": data[v].usermessages, 
       "adminchatc": data[v].adm, "admmessages": data[v].admmessages};

console.log(dataurai);
       inblockchat.push(<BlockChat dapatdata={dataurai} />);
   
}

               let uinblock = {...inblockch};
                     uinblock = inblockchat;
               setInblockch(uinblock);                


}
       }); 


}


const updatefromprop = async () => {
  console.log(mupdate);
 inblockchat.push(<BlockChat dapatdata={mupdate[0]} />);

               setInblockch(inblockch => [...inblockch, inblockchat[0]]);

               setMupdate([]);

	   }



useEffect(() => {
    updatefunc();
}, []);


useEffect(() => {
      if(mupdate[0]){
      updatefromprop();
}
}, [JSON.stringify(mupdate)] );



return(
<>
<div>
{inblockch}
</div>
<div>
<QueueComp a={takeout}/>
</div>



</>

)

}



export default ChatcompInside;

