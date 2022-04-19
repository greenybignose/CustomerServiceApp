import React, { useState } from 'react';
import styled from 'styled-components';
import ChatComponents from './ChatComponents.js';
import FeatherIcon from 'feather-icons-react';
import Betweenuname from './Betweenuname';
import MemberArea from './MemberArea';
import CompanyComponents from './CompanyComponents';
import './Fab.css';
import CPButton from './CPButton.svg';
import  OSButton from './OSButton.svg';
import MButton from './MButton.svg';
import CPButtonP from './CPButtonP.svg';
import  OSButtonP from './OSButtonP.svg';
import MButtonP from './MButtonP.svg';

const Menu = () => {

const [componentvalue, setComponentvalue] = useState(<CompanyComponents/>);
const [cpbuttons, setCpbuttons] = useState(CPButton);  
const [osbuttons, setOsbuttons] = useState(OSButton);  
const [mbuttons, setMbuttons] = useState(MButton);  
const [tampilan, setTampilan] = useState("ngumpet");
const [feat, setFeat] = useState("featheri");

function handleClicktoggle(){
 let newtampilan = tampilan;
 newtampilan = "tampil";
  setTampilan(newtampilan);
  let newfeat = feat;
   newfeat = "ngumpet";
   setFeat(newfeat);
};


const backuchat = (backnow) => {
        let newstat = tampilan;
            newstat = backnow;
       setTampilan(newstat);
}



 function handleClick(event){
    if(event.target.name === "member"){
         let newcomponent = componentvalue;
          newcomponent = <MemberArea/>;
          setComponentvalue(newcomponent);
      };

};

function handleovercompro(event){
    if(event.target.name === "compro"){
        let newcpbuttons = cpbuttons;
         newcpbuttons=CPButtonP;
          setCpbuttons(newcpbuttons);
}}

function handleoverours(event){
    if(event.target.name === "ours"){
        let newosbuttons = osbuttons;
         newosbuttons=OSButtonP;
          setOsbuttons(newosbuttons);
}}

function handleovermember(event){
    if(event.target.name === "member"){
        let newmbuttons = mbuttons;
         newmbuttons=MButtonP;
          setMbuttons(newmbuttons);
}}



       return(
<>
       <div>
<ul className="nav">
<li>
                 <img src={cpbuttons}  name="compro" className="btncp" width="300px" height="80px" 
onMouseOver={(e) => handleovercompro(e)} />
</li>
<li>
                <img src={osbuttons} name="ours" className="btns"  width="20px" height="5px" 
onMouseOver={(e) => handleoverours(e)} />  
</li>
<li >
  <img src={mbuttons}  name="member" className="btnm" width="180px" height="70px"
onMouseOver={(e) => handleovermember(e)}  onClick={(e) => handleClick(e)} />
</li>
</ul>
</div>
<div id="diva" className="diva">    
 <FeatherIcon  
            icon="headphones" color="blue" className={feat}
/* filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"*/ size={48} onClick={() => handleClicktoggle()} />
</div>
<div>
        <Betweenuname vis={tampilan}  turnoff={backuchat} />
         </div>
           <div>
        {componentvalue}
</div>
</>
);


}

export default Menu;
          
