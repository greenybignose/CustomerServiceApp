import React, {useRef, useEffect, useState} from 'react';
import { readFileSync } from "fs";
import './Fab.css';
import './UserChat.css';

const URL = 'wss://www.primer-logistics.com';

const UserChat = (props) => {

         const [onetime , setOnetime] = useState();
     const  textchat = useRef(null);      
      const adminchat = useRef(null);  
  const [ws, setWs] = useState(new WebSocket(URL));
const arrofmess = [];
         
useEffect(() => {
   if(props.nantri){
                adminchat.current.value = "Please wait, you're on " + props.nantri;
}
}, [props.nantri]);
  
        
useEffect(() => {
   if(props.email){
          let newonetime = onetime;
            newonetime = "yes";
         setOnetime(newonetime);
}       
}, [props.email]);

      if(onetime  === "yes"){
                   ws.onopen = () => {
     let emailneh = props.email;
          let chatneh = "nehconndah";                       
     const message = { email: emailneh, message: chatneh};
                ws.send(JSON.stringify(message));

              console.log('WebSocket Connected');
              
            }

               let newonetime = onetime;
               newonetime = "no";
               setOnetime(newonetime);
}

          
            ws.onmessage = (e) => {
              const message = JSON.parse(e.data);
              if(message.to  === props.email){
                 adminchat.current.value = message.message;
                  }
               else if(message.status === "admindown"){
                    console.log("admindown");
              adminchat.current.value = "connection to admin down";             
                       }
               else if(message.forcedown === "yes" && message.email === props.email){
                 let emailmess = props.email;
                  let statusnya = "userdown";
                   const message = { status: statusnya, email: emailmess };
                ws.send(JSON.stringify(message));
                 ws.close();
         }   }  


           window.addEventListener('beforeunload', function(k){
                  k.preventDefault();
                  let emailnya = props.email;
                  let statusnya = "userdown";
                   const message = { status: statusnya, email: emailnya };
                ws.send(JSON.stringify(message));
                 ws.close();

    });

function handleSend(index) {
     if(ws.readyState === WebSocket.OPEN){
        if(arrofmess.length === 1){
          ws.send(JSON.stringify(arrofmess[0]));
           arrofmess.length = 0;
}
        else {
         ws.send(JSON.stringify(arrofmess[index]));
          if(index === arrofmess.length -1){
             arrofmess.length = 0;
         }
     }
   }
     else if(ws.readyState === WebSocket.CONNECTING) {
       ws.addEventListener("open", () => handleSend(arrofmess.length - 1));
   }
};


function handleSubmit(event){
        event.preventDefault();
     let emailnya = props.email;
  let tmpchat = textchat.current.value;
                const message = { email: emailnya, message: tmpchat};
                 arrofmess.push(message);
                 handleSend(null);

textchat.current.value = '';
      
}


return(

<>
<div className={props.className}>

<div className="blkareaa">
  <button className="btnareaa">Admin</button>
  <textarea type="textarea" readOnly className="txtareaa" ref={adminchat}>
    </textarea>
</div>
<div className="blkareau">
  <form action="" onSubmit={(e) => handleSubmit(e)}>
  <button className="btnareau">{props.email}</button>
  <textarea type="textarea" className="txtareau"   
   ref={textchat} >
    </textarea>
   <input type="submit" className="btnsubmit" value="send"/>
   </form> 
</div>
</div> 
</>
   );
}


export default UserChat;



