import React, {useState, useEffect} from 'react';
import ChatcompInside from './ChatcompInside';
import Menu from './Menu';

const ChatComponents =  () => {



const [chcomp, setChcomp] = useState(<Menu />);

const updatecomp = async () => {

           let datau = { "checklogin": "yes", "sourcenya": "memberarea" };
await fetch("https://www.primer-logistics.com", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datau)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.answer === "sudah"){
        let newchcomp = chcomp;
         newchcomp = <ChatcompInside />;
            setChcomp(newchcomp);   

}
});
}

useEffect(() => { updatecomp() }, []);


return(
<>
{chcomp}
</>
)
}

export default ChatComponents;
