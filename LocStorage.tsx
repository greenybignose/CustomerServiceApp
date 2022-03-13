import React from 'react';
import {Div, Button} from './Button';

interface Labis {
colornowlala: string;
onclicklala: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const LocStorage = ({colornowlala, onclicklala}: Labis) => {
  return(

 <Div ngumpet="visible">  
<Button colornow={colornowlala}>    </Button>
<div>{colornowlala} </div> 
 <div><input type="checkbox" 
  onClick={onclicklala }   /></div> 

 </Div>
)
}

export default LocStorage; 
