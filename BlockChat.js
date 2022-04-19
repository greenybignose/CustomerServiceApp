import React from 'react';
import './BlockChat.css';

const BlockChat = (props) => {

return(
<>
<div className="topblock">
<div className="userblock">
<button className="elinbu">{props.dapatdata.emailaddress}</button>
<p className="elinu">{props.dapatdata.usermessages}</p>
</div>
<div className="adminblock">
<button className="elinba">{props.dapatdata.adm}</button>
<p className="elina">{props.dapatdata.admmessages}</p>
</div>
</div>
</>
);

}

export default BlockChat;

