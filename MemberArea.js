import React, {useState, useRef} from 'react';
import './Fab.css';

const MemberArea = () => {



   const uname = useRef(null);
   const  passwd = useRef(null);






function handleClick(event){
         if(uname.current.value && passwd.current.value){
          let username = uname.current.value;


          let password = passwd.current.value;

           let datau = { "uname": username, "pass": password, "sourcenya": "memberarea" };
 fetch("https://www.primer-logistics.com", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.answer === "available"){
            window.location.href = "https://www.primer-logistics.com/memberarea";
}

       else if(data.answer === "queue0"){
//todo
}
else {
//todo
}
            

});
}
}

return(
<>

<div className="usernya">
<label className="label">Username:</label>
<input className="label" type="text" size={20} ref={uname} />
</div>
<div className="passwordnya">
<label className="label">Password:</label>
<input className="label" type="password" size={20} ref={passwd} />
</div>
<div className="submit">
<button className="label" onClick={(e) => handleClick(e)} >LogIn</button>
</div>

</>
);
}

export default MemberArea;

