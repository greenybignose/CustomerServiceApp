import React, {useState} from 'react';
import './Fab.css';

const MemberArea = () => {


let username = '';
let password = '';

function handleChange(event){
   if(event.target.name === "username")
       username = event.target.value;
    else if(event.target.name === "password")
      password = event.target.value;

}


function handleSubmit(event){
           let datau = { "uname": username, "pass": password };
 fetch("https://159.203.39.197:3000/memberarea", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.answer === "available"){
            window.location.href = "https://159.203.39.197:3000/memberarea";
}
       else if(data.answer === "queue0"){
//todo
}
else {
//todo
}
            

});
}

return(
<>
<div className="formnya">
<form method="" onSubmit={(e) => handleSubmit(e)} >
<div className="usernya">
<label className="label">Username:</label>
<input className="label" type="text" size={20} name="username" onChange={(e) => handleChange(e)}/>
</div>
<div className="passwordnya">
<label className="label">Password:</label>
<input className="label" type="password" size={20} name="password" onChange={(e) => handleChange(e)}/>
</div>
<div className="submit">
<input className="label" type="submit" formaction="/memberarea" value="LogIn"/>
</div>
</form>
</div>
</>
);
}

export default MemberArea;

