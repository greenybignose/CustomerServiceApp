import React, {useRef, useEffect, useState} from 'react';
import './Fab.css';
import './UserChatna.css';


const UserChatna = (props) => {

     const  textchat = useRef(null);      
      const adminchat = useRef(null);  
         

        






function handleSubmit(event){
        event.preventDefault();
     let emailnya = props.email;
  let tmpchat = textchat.current.value;
                const message = { email: emailnya, messagena: tmpchat};
fetch("https://www.primer-logistics.com/memberarea", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(message)
});


textchat.current.value = 'Thank you';
   
}


return(

<>
<div className={props.className}>

<div className="blkareaa">
  <button className="btnareaa">Admin</button>
  <textarea type="textarea" readOnly className="txtareaa" ref={adminchat}>
   Please leave your message below, as our admin not available at this moment. 
   We will reply as soon as possible.
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


export default UserChatna;



