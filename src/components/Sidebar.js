import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css"

function Sidebar() {

  function recentItem(topic) {
    return(
    <div className="sidebar__recentItem" >
      <span className="sidebar__hash" >#</span>
      <p>{topic}</p>
    </div>)
  }
  
  return (
    <div className="sidebar" >
      <div className="sidebar__top" >
        <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjBibHVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""  />
        <Avatar className="sidebar__avatar" />
        <h2>Mahmad Mustaq</h2>
        <h4>Software Developer at Go One Technologies.</h4>
      </div>
      <div className="sidebar__stats" >
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber" >2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>View on POst</p>
          <p className="sidebar__statNumber" >2,445</p>
        </div>
      </div>
      <div className="sidebar__bottom" >
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("Software-Engineering")}
        {recentItem("Design")}
        {recentItem("Development")}
        {recentItem("Web-Developer")}
      </div>
    </div>
  )
}

export default Sidebar
