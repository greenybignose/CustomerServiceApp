import React from 'react';
import './BlockChatML.css';

const BlockChatML = (props) => {

console.log(props);


return(
<>
<div className="messageblock">
<button className="emailbtn">{props.dapatdataml.emailuser}</button>
<p className="emailmsg">{props.dapatdataml.usermessages}</p>
</div>

</>
);

}

export default BlockChatML;

