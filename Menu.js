import React, { useState } from 'react';
import styled from 'styled-components';
import ChatComponents from './ChatComponents.js';
import FeatherIcon from 'feather-icons-react';
import Betweenuname from './Betweenuname';
import MemberArea from './MemberArea';
import CompanyComponents from './CompanyComponents';
import './Fab.css';
import image from './seafreight.jpeg';
import CPButton from './CPButton.svg';
import  OSButton from './OSButton.svg';
import MButton from './MButton.svg';
import CPButtonP from './CPButtonP.svg';
import  OSButtonP from './OSButtonP.svg';
import MButtonP from './MButtonP.svg';
import ChatUs from './ChatUs.svg';
import ChatUsSmile from './ChatUsSmile.svg';

const Menu = () => {

const [componentvalue, setComponentvalue] = useState(<div className="companycomp"><CompanyComponents /></div>);
const [cpbuttons, setCpbuttons] = useState(CPButton);  
const [osbuttons, setOsbuttons] = useState(OSButton);  
const [mbuttons, setMbuttons] = useState(MButton);  
const [tampilan, setTampilan] = useState("ngumpet");
const [feat, setFeat] = useState("featheri");
const [chatpic, setChatpic] = useState(ChatUs);

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
          newcomponent = <div className="memberarea"><MemberArea  /></div>;
          setComponentvalue(newcomponent);
      }
    else if(event.target.name === "compro"){
        let newcomponent = componentvalue;
        newcomponent = <div className="companycomp"><CompanyComponents/></div>;
        setComponentvalue(newcomponent);

}
}

function handleentercompro(event){
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

function handleentermember(event){
    if(event.target.name === "member"){
        let newmbuttons = mbuttons;
         newmbuttons=MButtonP;
          setMbuttons(newmbuttons);
}}

function handleoutcompro(event){
    if(event.target.name === "compro"){
        let newcpbuttons = cpbuttons;
         newcpbuttons=CPButton;
          setCpbuttons(newcpbuttons);
}}

function handleoutmember(event){
    if(event.target.name === "member"){
        let newmbuttons = mbuttons;
         newmbuttons=MButton;
          setMbuttons(newmbuttons);
}}

function handlemouseenter(){
        let  newchatpic = chatpic;
            newchatpic = ChatUsSmile;
        setChatpic(newchatpic);
}

function handlemouseout(){
        let  newchatpic = chatpic;
            newchatpic = ChatUs;
        setChatpic(newchatpic);
}


       return(
<>
<div className="divimage">
  <img src={image} width="100%" height="100%"/>
</div>

       <div className="divul">
<div className="divinside1">
                 <img src={cpbuttons}  className="buttonmenu1" name="compro" width="60%" height="76px" 
onMouseEnter={(e) => handleentercompro(e)} onMouseOut={(e) => handleoutcompro(e)} 
onClick={(e) => handleClick(e)} />
</div>
<div className="divinside2">
                <img src={osbuttons} className="buttonmenu2" name="ours" width="60%" height="80px" 
onMouseOver={(e) => handleoverours(e)} />  
</div>
<div className="divinside3" >
  <img src={mbuttons}  name="member" className="buttonmenu3" width="40%" height="80px"
onMouseEnter={(e) => handleentermember(e)} onMouseOut={(e) => handleoutmember(e)}
 onClick={(e) => handleClick(e)} />
</div>
</div>
        {componentvalue}
<div id="diva" className="diva">    
 <img src={chatpic} width="80%" height="100%"  onClick={() => handleClicktoggle()} onMouseEnter={() =>
handlemouseenter()} onMouseOut={() => handlemouseout()}/>
</div>
<div>
        <Betweenuname vis={tampilan}  turnoff={backuchat} />
         </div>

</>
);


}

export default Menu;
          
