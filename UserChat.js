import React, {useRef, useEffect, useState} from 'react';
import { readFileSync } from "fs";

const URL = 'wss://159.203.39.197:3000';

const QueueComp = (props) => {

         const [onetime , setOnetime] = useState('yes');
     const  textchat = useRef(null);      
      const adminchat = useRef(null);  
    const [fromuser, setFromuser] = useState([]);
   const [fromadmin, setFromadmin] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));
         

        


              if(onetime  === "yes"){
                   ws.onopen = () => {
              console.log('WebSocket Connected');
              
            }
               let newonetime = onetime;
               newonetime = "no";
               setOnetime(newonetime);
}

          
            ws.onmessage = (e) => {
              const message = JSON.parse(e.data);
               if(message.to  === props.email){
                   if(message.message !== ""){ 
                     let newfromadmin = fromadmin;
                    newfromadmin.push(e.data);
                 setFromadmin(newfromadmin);
                 adminchat.current.value = message.message;
                      console.log(fromadmin);
                  }}
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

          if(textchat.current.value !== ''){
         let chatbaru = fromuser;
                   let emailnya = props.email;
                   let tempmess = textchat.current.value;
                const message = { email: emailnya, message: tempmess};
                  chatbaru.push(message);
      setFromuser(chatbaru);

                ws.send(JSON.stringify(message));

             }
textchat.current.value = '';
      
console.log(fromuser);
}


return(

<>
<div>
  <textarea type="textarea" rows="10" cols="50" ref={adminchat}>
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



