import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header" >
      <div className="header__left" >
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="header__search" >
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div> 
      </div>
      <div className="header__right" >
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar ="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" />
        {/* <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />  */}
      </div>
    </div>
  )
}

export default Header
