import React, {useRef, useEffect, useState} from 'react';
import { readFileSync } from "fs";
import './QueueComp.css';

const URL = 'wss://www.primer-logistics.com';

const QueueComp = (props) => {

         const [onetime , setOnetime] = useState('yes');
         const [fromuser, setFromuser ] = useState([]);
      const [adminchat, setAdminchat ] = useState([]);
      const [email, setEmail] = useState();
     const  textchat = useRef(null);      
      const userchat = useRef(null);
     const [queuepage, setQueuepage] = useState();

  const [ws, setWs] = useState(new WebSocket(URL));


              if(onetime  === "yes"){
                   ws.onopen = () => {
                   const message = { user: "admin", message: ""};
                ws.send(JSON.stringify(message));
              
            }
               let newonetime = onetime;
               newonetime = "no";
               setOnetime(newonetime);
}

// making async, wait response and then to make all set updated synchronously

async function onmessagehelper(message){
               let   emailaddress = email;
                    emailaddress = message.email;
      if(emailaddress){
      await setEmail(emailaddress);

                              
}
return "kampret";

}








function onmessagequeuehelp(message){
             let newqueuepage = queuepage;
                newqueuepage = "Queue: " + message.jumlahqueue;
              setQueuepage(newqueuepage);
    }


            ws.onmessage = (e) => {
  
            console.log(JSON.parse(e.data));  
          const message = JSON.parse(e.data);
              
               if(message.queuecount === "yes"){
                   onmessagequeuehelp(message);
}
             else{
		onmessagehelper(message).then((resp) => {             
              if(message.message && message.message !== "nehconndah"){
      setFromuser(fromuser => [...fromuser, message]);

                    console.log("isi dari fromuser neh" + fromuser[0]);
                  userchat.current.value = message.message;
}
});
}}



              



           window.addEventListener('unload', function(k){
                  k.preventDefault();
                   const message = { status: "admindown", message: ''};
                ws.send(JSON.stringify(message));
                ws.close();
            });


async function handlesendfetch(){
   if(fromuser[0] && adminchat[0]){ 

      console.log("sudah masuk ke handlesendfetch");

  let datau = { "fromuserc": fromuser[0].email, "usermessages": fromuser[0].message,
               "adminchatc": adminchat[0].user, "admmessages": adminchat[0].message,
                  "sourcenya": "memberarea" };
     props.a(datau);                

  await fetch("https://www.primer-logistics.com", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) => response.json())
.then(function(data){
   if(data.answer === "done"){
                    console.log("dapat response ok");
                      setFromuser([]);
                      setAdminchat([]);
}
});
}}



function handleClicksend(event){
        event.preventDefault();
 
          
          if(textchat.current.value !== ''){
 if(ws.readyState === WebSocket.OPEN){
                 let tmpchat = textchat.current.value;
                const message = { user: "admin", message: tmpchat};
                ws.send(JSON.stringify(message));
 setAdminchat(adminchat => [...adminchat, message]);
   
   }
  else if(ws.readyState === WebSocket.CONNECTING){
         let newqueuepage = queuepage;
           newqueuepage = "Connecting...";
          setQueuepage(newqueuepage);
}

textchat.current.value = '';

}
}

useEffect(() => {
        handlesendfetch(); }, [JSON.stringify(adminchat)]);

useEffect(() => {
        handlesendfetch(); }, [JSON.stringify(fromuser)]);

 

      console.log("adminchat isinya neh" + adminchat[0]);

function handleClicknq(event){
   let messagechange = {"forcedown": "yes", "email": email}
       ws.send(JSON.stringify(messagechange));
}


return(

<>
<div className="showup2">
<div className="blkareau2">
{ email &&  <button className="btnareau2">{email}</button> }
  <textarea type="textarea" readOnly className="txtareau2" rows="10" cols="50" ref={userchat}>
    </textarea>
</div>
<div className="blkareaa2">
<button className="btnareaa2">Admin</button>
  <textarea type="textarea" className="txtareaa2" rows="10" cols="50"  
   ref={textchat} >
    </textarea>
      <div classNane="divstraight2">
<div className="queueblock2">
     <p className="queuepage2">{queuepage}</p>
</div>
<div className="nqbuttonblock2">
       <button className="nqbutton2" onClick={(e) => handleClicknq(e)}>Next Queue</button>  
</div>
<div className="btnsubmitblock2">
     <button className="btnsubmit2" onClick={(e) => handleClicksend(e)}>Send</button>
</div>
</div>
</div> 
</div>
</>
   );
}


export default QueueComp;
