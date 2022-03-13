import { useState, useEffect } from 'react';
import Boxes from './Boxes';
import LocStorage from './LocStorage';



type Warna = {
color: string;
visibility: string;
};    

const ColorChange  = ()   => {
   

let objectwarna: Array<Warna> = [];

const warna = ["#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6", "#34495E", "#16A085",
 "#27AE60","#2C3E50", "#F1C40F", "#E67E22", "#E74C3C", "#ECF0F1", "#95A5A6", "#F39C12", "#D35400", "#C0392B",
"#BDC3C7", "#7F8C8D"];

type Oostring = {
satu: string | null,
dua: string | null,
tiga: string | null,
empat: string | null,
even: string | null,
}




const [count, setCount] = useState<number>(0);


const [inputgroup, setInputgroup] = useState<Oostring>({satu: '', dua: '', tiga: '', empat: '', even: ''});

const [colorobj, setColorobj] = useState<Array<Warna>>(() => {

for(let x=0; x < warna.length; x++){
     objectwarna.push( { color: warna[x],
             visibility: "visible" } );
}

return objectwarna;
}
);

type RGB = {
  r: number;
  g: number;
  b: number;
};


function hexToRgb(hex: string): RGB {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function saturation(i: Array<number>, v: number) { //i as in input, v as saturation value
    var min = i.indexOf(Math.min.apply(this, i)), //returns the index of min, max and mid.
        max = i.indexOf(Math.max.apply(this, i)),
        mid = parseInt([0, 1, 2].filter(function (j) {return Array(min, max).indexOf(j) < 0;}).toString()),
        r = (i[max] - i[mid]) / (i[mid] - i[min]), //ratio, because it is always constant,
                                                   //we use this to calc mid value
        o = []; //o as in output
    if (min !== max) {
        o[max] = Math.round(i[max]);
        o[min] = Math.round(i[max] * (1 - v));
        o[mid] = Math.round(o[max] / (r + 1) * v + i[max] * (1 - v));
    }
    return o;
};



function becomecolor(event: React.ChangeEvent<HTMLInputElement>){
 
    event.stopPropagation();
let upinputgroup = inputgroup;    

if(event.target.name === "satu"){
  if(inputgroup.satu === ''){
    upinputgroup.satu = "checked";
    upinputgroup.even = "satu";
     event.target.checked = true;
   }
 else if(inputgroup.satu === "checked") {
     upinputgroup.satu = '';
     upinputgroup.even = "satu"
}
     setInputgroup(upinputgroup);

   if(inputgroup.satu === "checked" && inputgroup.even === "satu"){
     colorobj.map(function(object, index){
 if(hexToRgb(object.color).r < 128) {

let updateone = {...colorobj[index]};

updateone.color = rgbToHex(128, hexToRgb(object.color).g, hexToRgb(object.color).b).toUpperCase();
updatenow[index] = updateone; 

     }
});
setColorobj(updatenow);
}


else if(inputgroup.satu === '' && inputgroup.even === "satu"){

  colorobj.map(function(object, index){
 if(hexToRgb(object.color).r >= 128) {

let updateone = {...colorobj[index]};

updateone.color = rgbToHex(hexToRgb(warna[index]).r, hexToRgb(object.color).g, hexToRgb(object.color).b).toUpperCase();
updatenow[index] = updateone; 

     }
});
setColorobj(updatenow);
}




}


if(event.target.name === "dua"){
  if(inputgroup.dua === ''){
    upinputgroup.dua = "checked";
    upinputgroup.even = "dua";
   }
 else  if(inputgroup.dua === "checked") {
     upinputgroup.dua = '';
     upinputgroup.even = "dua";
}
     setInputgroup(upinputgroup);
   if(inputgroup.dua === "checked" && inputgroup.even === "dua"){
     colorobj.map(function(object, index){
 if(hexToRgb(object.color).g < 128) {

let updateone = {...colorobj[index]};

updateone.color = rgbToHex(hexToRgb(object.color).r, 128, hexToRgb(object.color).b).toUpperCase();
updatenow[index] = updateone; 

     }
});
setColorobj(updatenow);
}


else if(inputgroup.dua === '' && inputgroup.even === "dua"){

  colorobj.map(function(object, index){
 if(hexToRgb(object.color).g >= 128) {

let updateone = {...colorobj[index]};

updateone.color = rgbToHex(hexToRgb(object.color).r, hexToRgb(warna[index]).g, hexToRgb(object.color).b).toUpperCase();
updatenow[index] = updateone; 

     }
});
setColorobj(updatenow);
}



}

if(event.target.name === "tiga"){
  if(inputgroup.tiga === ''){
    upinputgroup.tiga = "checked";
    upinputgroup.even = "tiga";
   }
  else if(inputgroup.tiga === "checked") {
     upinputgroup.tiga = '';
     upinputgroup.even = "tiga";
}
     setInputgroup(upinputgroup);


   if(inputgroup.tiga === "checked" && inputgroup.even === "tiga"){
     colorobj.map(function(object, index){
 if(hexToRgb(object.color).b < 128) {

let updateone = {...colorobj[index]};

updateone.color = rgbToHex(hexToRgb(object.color).r, hexToRgb(object.color).g, 128).toUpperCase();
updatenow[index] = updateone; 

     }
});
setColorobj(updatenow);
}



else if(inputgroup.tiga === '' && inputgroup.even === "tiga"){

  colorobj.map(function(object, index){
 if(hexToRgb(object.color).b >= 128) {

let updateone = {...colorobj[index]};

updateone.color = rgbToHex(hexToRgb(object.color).r, hexToRgb(object.color).g, hexToRgb(warna[index]).b).toUpperCase();
updatenow[index] = updateone; 

     }
});
setColorobj(updatenow);
}

}



if(event.target.name === "empat"){
  if(inputgroup.empat === ''){
    upinputgroup.empat = "checked";
    upinputgroup.even = "empat";
   }
  else if(inputgroup.empat === "checked") {
     upinputgroup.empat = '';
     upinputgroup.even = "empat";
}
     setInputgroup(upinputgroup);


if(inputgroup.empat === "checked" && inputgroup.even === "empat"){

   colorobj.map(function(object, index) {
let a = [hexToRgb(object.color).r, hexToRgb(object.color).g, hexToRgb(object.color).b];
     let updateone = {...colorobj[index]};

updateone.color = rgbToHex(saturation(a, 0.6)[0], saturation(a, 0.6)[1], saturation(a, 0.6)[2]).toUpperCase();
updatenow[index] = updateone;
}
);
setColorobj(updatenow);
}   

else if(inputgroup.empat === '' && inputgroup.even === "empat"){

     colorobj.map(function(object, index) {
let a = [hexToRgb(object.color).r, hexToRgb(object.color).g, hexToRgb(object.color).b];
     let updateone = {...colorobj[index]};

updateone.color = rgbToHex(saturation(a, 0)[0], saturation(a, 0)[1], saturation(a, 0)[2]).toUpperCase();
updatenow[index] = updateone;
}
);
setColorobj(updatenow);
}   
}


}





let updatenow = [...colorobj]



 



const tai = [];

   for(let x=0; x < colorobj.length; x++){
tai.push(<Boxes   ngumpetatas={colorobj[x].visibility} colornowatas={colorobj[x].color} 
 onclicked={(e) => runhide(x)} /> ) };


const runhide = (e: number) => {
let updatenow = [...colorobj];
let updateone = {...colorobj[e]};

updateone.visibility = "hidden";
updatenow[e] = updateone; 

 setColorobj(updatenow);
}


const lala = [];

   for(let z=0; z< count; z++){

   lala.push( <LocStorage colornowlala={localStorage.getItem(z.toString())} 
   onclicklala={(e) => removestor(z.toString())   }   />
 );
}


 
const removestor = (z: string) => {
   localStorage.removeItem(z);
let newcount = count;
newcount -= 1;
setCount(newcount);
};






let resultnya = '';
const handleChangecol = (event: React.ChangeEvent<HTMLInputElement>) => {
         resultnya = event.target.value;
};


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
           event.preventDefault();   
    const colorstr =  resultnya;
      localStorage.setItem(count.toString(), colorstr );
    const getnow = localStorage.getItem(count.toString()).toString();


let newcount = count;
newcount += 1;
setCount(newcount);
}



   return(
<>
<form onSubmit={(e) => handleSubmit(e)} >
<label>Add new color:</label>  <input type="text" name="inputcolor"  size={40} 
onChange={(e) => handleChangecol(e)}  />
<input type="submit" value="Add" /> 
</form>

<form>
<label><input type="checkbox"  name="satu" onChange={(e) => becomecolor(e)}    /> Red {'>'} 50%   </label>
<label><input type="checkbox"  name="dua" onChange={(e) => becomecolor(e)}    />  Green {'>'} 50%    </label>
<label><input type="checkbox"  name="tiga" onChange={(e) => becomecolor(e)}    />Blue {'>'} 50%   </label>
<label><input type="checkbox"  name="empat" onChange={(e) => becomecolor(e)}  />Saturation {'>'} 50%     </label>
</form>
<div>
{tai}
{lala}
</div>

</>


)


}

export default ColorChange;
