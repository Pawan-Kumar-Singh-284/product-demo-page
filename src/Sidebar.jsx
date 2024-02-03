import React from 'react'
import "./sidebar.css"
import close from "./assets/images/icon-close.svg"

function Sidebar({sidebar, handleSidebar}) {
    if(!sidebar){
        return null;
      }
  return (
    <div class="sidebar">
      <button class="sidebarbtn" onClick={handleSidebar}>
        <img src={close} alt="" />
      </button>
      <div class="sidebarcontents">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Sidebar