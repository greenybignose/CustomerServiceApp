import React, {useRef, useEffect, useState} from 'react';
import { readFileSync } from "fs";

const URL = 'wss://159.203.39.197:3000';

const QueueComp = () => {

         const [onetime , setOnetime] = useState('yes');
         const [fromuser, setFromuser ] = useState([]);
      const [adminchat, setAdminchat ] = useState([]);
     const  textchat = useRef(null);      
      const userchat = useRef(null);

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


            ws.onmessage = (e) => {
              console.log(JSON.parse(e.data));  
              const message = JSON.parse(e.data);
              let emailaddress = message.email;
                 
              if(message.message){
              let newfromuser = fromuser;
               newfromuser.push(e.data)
                setFromuser(newfromuser);
                    console.log(newfromuser);
                  userchat.current.value = message.message;
         }
            }  



           window.addEventListener('beforeunload', function(k){
                  k.preventDefault();
                   const message = { status: "admindown", message: ''};
                ws.send(JSON.stringify(message));
              ws.onclose = () => {
                console.log('WebSocket Disconnected');
              }
            });




function handleSubmit(event){
        event.preventDefault();

          if(textchat.current.value !== ''){
            let  chatbaru = adminchat;
                 let tmpchat = textchat.current.value;
                const message = { user: "admin", message: tmpchat};
        chatbaru.push(message);
          setAdminchat(chatbaru);
                ws.send(JSON.stringify(message));
             }
textchat.current.value = '';

console.log(adminchat);      

}


return(

<>
<div>
  <textarea type="textarea" rows="10" cols="50" ref={userchat}>
    </textarea>
</div>
<div>
  <form action="" onSubmit={(e) => handleSubmit(e)}>
  <textarea type="textarea" rows="10" cols="50"  
   ref={textchat} >
    </textarea>
   <input type="submit" value="send"/>
   </form> 
</div> 
</>
   );
}


export default QueueComp;



