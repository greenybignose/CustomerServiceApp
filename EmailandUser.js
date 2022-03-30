import React, { forwardRef } from 'react';

const EmailandUser = forwardRef((props, ref) => {



return(
<>

<form onSubmit={props.onSubmit}>
<p>{props.textdown}</p>
<input type="text" name="myinput" size={20} ref={ref} />
<input type="submit" formaction="/betweenuname" value=" > " />
</form>
</>

);

});


export default EmailandUser;
