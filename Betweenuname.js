import React from 'react';
import {useMemo, useEffect, useState, useRef} from 'react';
import EmailandUser from './EmailandUser';
import UserChat from './UserChat';
import UserChatna from './UserChatna';
import './Fab.css';

const Betweenuname = (props) => {

const inputemail = useRef(null);
const [ onetime, setOnetime] = useState();
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [uchat, setUchat] = useState("ngumpet");
const [uchatna, setUchatna] = useState("ngumpet");
const [antrian, setAntrian] = useState();
const [textnya, setTextnya] = useState({text: "Please kindly leave your email address below in case" +  
 "our communication break or our customer service not available at this moment", code: 1});
useMemo(() => fetchdata(), [username]);




const handleSubmit = (event) => {

    event.preventDefault();
       if(textnya.code === 1){              
     let emailbaru  = inputemail.current.value; 
let newemail = email;
                        
   newemail = emailbaru;
    
                 setEmail(newemail);

console.log(newemail);   
let newtext = "Plese kindly input your name:";
let textbaru = textnya;
     textbaru.text = newtext;
      textbaru.code = 2;
   setTextnya(textbaru);


return;

}
     else if(textnya.code === 2){
        let userbaru = inputemail.current.value;

        let newusername = username;
           newusername = userbaru;
      setUsername(newusername)

}
}

function fetchdata() {

     let datauser = {"emailaddress": email, "currentuser": username, "sourcenya": "betweenuname"};

        
         fetch("https://www.primer-logistics.com", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datauser)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.answer === "available"){
props.turnoff("ngumpet");

let rerender = uchat;
     rerender = "tampil" ;
     setUchat(rerender);
             
}
       else if(data.answer === "notavailable"){
   props.turnoff("ngumpet");
   
let rerender = uchatna;
  rerender = "tampil";
  setUchatna(rerender);
}
     else if(data.answer === "queue1"){
     props.turnoff("ngumpet");
     let newqueue = antrian;
         newqueue = "queue1";
     setAntrian(newqueue);
}

else {
     props.turnoff("ngumpet");
     let newqueue = antrian;
         newqueue = data.answer;
     setAntrian(newqueue);

}
});
}

useEffect(() => {
    if(antrian){
console.log(antrian);
      let rerender = uchat;
     rerender = "tampil" ;
     setUchat(rerender);
}
}, [antrian]);

return(
<>
<EmailandUser vise={props.vis} ref={inputemail}
 textdown={textnya.text} onSubmit = {(e) => handleSubmit(e)} />

{ uchat === "tampil" &&
 (<UserChat className={uchat} email={email} user={username} nantri={antrian} />)  }
<UserChatna className={uchatna} email={email} user={username} />

</>
)



}

export default Betweenuname;
