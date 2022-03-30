import React, { useState } from 'react';
import styled from 'styled-components';
import  './Button.css';
import ChatComponents from './ChatComponents.js';
import { ToggleLeft } from 'react-feather';
import Username from './Chatpageone';
import Betweenuname from './Betweenuname';
import MemberArea from './MemberArea';
import CompanyComponents from './CompanyComponents';

const Menu = () => {

const [componentvalue, setComponentvalue] = useState(<CompanyComponents/>);
const [open, setOpen] = useState();  

function handleClicktoggle(){
 let newopen = open;
 newopen = "open";
  setOpen(newopen);
};


 function handleClick(event){
    if(event.target.name === "member"){
         let newcomponent = componentvalue;
          newcomponent = <MemberArea/>;
          setComponentvalue(newcomponent);
      };

};

       return(
<>
       <div>
             <button  className="button"> About Us </button>
                  <button   className="button" > Chat </button>
      <button className="button" name="member" onClick={(e) => handleClick(e)}> Member </button>
         <ToggleLeft  color="blue" 
 size={48}  onClick={() => handleClicktoggle()} />   
          { open && <Username><Betweenuname/></Username> }
         </div>
           <div>
        {componentvalue}
</div>
</>
);


}

export default Menu;
          
