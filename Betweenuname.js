import React from 'react';
import {useMemo, useEffect, useState, useRef} from 'react';
import EmailandUser from './EmailandUser';
import UserChat from './UserChat';


const Betweenuname = () => {

const inputemail = useRef(null);
const [ onetime, setOnetime] = useState();
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [textnya, setTextnya] = useState({text: "Please kindly leave your email address below in case" +  
 "our communication break or our customer service not available at this moment", code: 1});
const [componentshow, setComponentshow] = useState(<EmailandUser ref={inputemail} textdown={textnya.text}
onSubmit = {(e) => handleSubmit(e)} /> );
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

let rerender = componentshow;
     rerender = <EmailandUser ref={inputemail} textdown={textnya.text}
onSubmit = {(e) => handleSubmit(e)} />;
     setComponentshow(rerender);

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

     let datauser = {"emailaddress": email, "currentuser": username};

        
         fetch("https://159.203.39.197:3000/betweenuname", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datauser)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.answer === "available"){

let rerender = componentshow;
     rerender = <UserChat email={email} user={username} />;
     setComponentshow(rerender);
             
}
       else if(data === "queue0"){
//todo
}
else {
//todo
}

});
}


return(
<>
{ componentshow }

</>
)



}

export default Betweenuname;
