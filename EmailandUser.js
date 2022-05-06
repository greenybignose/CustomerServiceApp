import React, { forwardRef } from 'react';
import './EmailandUser.css';

const EmailandUser = forwardRef((props, ref) => {




return(
<>
<div className={props.vise}>
<form onSubmit={props.onSubmit}>
<div className="divfirst">
<p className="txtpart1">{props.textdown}</p>
</div>
<div className="anotherdiv1">
<input className="typetxt1" type="text" name="myinput" size={20} ref={ref} />
<input className="btnok1" type="submit" formaction="/betweenuname" value=" > " />
</div>
</form>
</div>
</>

);

});


export default EmailandUser;
