import React, { FunctionComponent }  from 'react';
import { Div, Button } from './Button.js';


interface Props{
onclicked: (x: React.MouseEvent<HTMLInputElement>) => void;
ngumpetatas: string;
colornowatas: string;
}

const Boxes = ({ngumpetatas, colornowatas, onclicked}: Props) => {

return(
<Div   ngumpet={ngumpetatas}>
<Button colornow={colornowatas}>    </Button>
<div>{colornowatas}
   </div> 
 <div><input type="checkbox" onClick={onclicked}   /></div>

</Div> 

)

}

export default Boxes;
