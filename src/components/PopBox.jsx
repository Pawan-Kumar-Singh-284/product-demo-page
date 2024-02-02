import React from "react";
import closeimg from "../assets/images/icon-close.svg";



function PopBox({isopen, close, children}) {
  if(!isopen){
    return null;
  }
  return (
 
    <div className="lightbox">
      <button className="lboxclose">
        <img src={closeimg} alt=""  onClick={close}/>
      </button>
       {children}
    
    </div>
    
  );
}

export default PopBox;
