import React, {useState} from 'react';

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
<div>
<form method="" onSubmit={(e) => handleSubmit(e)} >
<label>Username:</label><input type="text" size={48} name="username" onChange={(e) => handleChange(e)}/>
<label>Password:</label><input type="password" size={48} name="password" onChange={(e) => handleChange(e)}/>
<input type="submit" formaction="/memberarea" value="LogIn"/>
</form>
</div>
</>
);
}

export default MemberArea;

