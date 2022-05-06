import React from 'react';
import './BlockChat.css';

const BlockChat = (props) => {

console.log(props);


return(
<>
<div className="topblock">
<div className="userblock">
<button className="elinbu">{props.dapatdata.fromuserc}</button>
<p className="elinu">{props.dapatdata.usermessages}</p>
</div>
<div className="adminblock">
<button className="elinba">{props.dapatdata.adminchatc}</button>
<p className="elina">{props.dapatdata.admmessages}</p>
</div>
</div>
</>
);

}

export default BlockChat;

