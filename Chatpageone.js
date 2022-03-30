import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Username = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);


 useEffect(() => {
    
   
    const div = document.createElement("div");
    setContainer(div);
 }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
"",
"",
"width=400,height=200, left=800,top=800, scrollbars=1,resizable=1, menubar=0, location=0, titlebar=0"
      );

      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};




/*
<div>
<form onSubmit="handleSubmit()">
<p> Please kindly leave your email address below in case  our communication break or 
our customer service not available at this moment</p>
<input type="text" size={20} value='' /><input type="submit" value=" > " />
</form>
</div>

function handleSubmit() {
  


}


}
*/
export default Username;
