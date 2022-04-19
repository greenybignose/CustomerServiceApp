import React, {useRef, useEffect, useState} from 'react';
import { readFileSync } from "fs";
import './Fab.css';
import './UserChat.css';

const URL = 'wss://159.203.39.197:3000';

const UserChat = (props) => {

         const [onetime , setOnetime] = useState();
     const  textchat = useRef(null);      
      const adminchat = useRef(null);  
  const [ws, setWs] = useState(new WebSocket(URL));
         
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
                   //todo shwing up message admindown
                      }
            }  


           window.addEventListener('beforeunload', function(k){
                  k.preventDefault();
                  let emailnya = props.email;
                   const message = { status: "userdown", email: emailnya };
                ws.send(JSON.stringify(message));
              ws.onclose = () => {
                console.log('WebSocket Disconnected');
              }
            });




function handleSubmit(event){
        event.preventDefault();
     let emailnya = props.email;
  let tmpchat = textchat.current.value;
                const message = { email: emailnya, message: tmpchat};
                ws.send(JSON.stringify(message));

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



