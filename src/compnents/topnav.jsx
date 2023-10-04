import React from "react";
import home from  "../logos/Settings/home-03.svg";
import chevronRight from  "../logos/Settings/chevron-right.svg";
import search from  "../logos/Settings/search-lg.svg";
import settings from  "../logos/Settings/settings-01.svg";
import bell from  "../logos/Settings/bell-01.svg";
import userPic from  "../logos/Settings/Avatar.png";


const TopNav = ()=>{

    return (
        <div className="topNav">
            <div className="pathflow">
                <img src={home} alt="home" />
                <img src={chevronRight} alt="chevronRight" />
                <div className="navSet">Settings</div>
                <img src={chevronRight} alt="chevronRight" />
                <div className="domain">Domains</div>
            </div>
            <div className="handeler">
                <img src={search} alt="search" />
                <img src={settings} alt="settings" />
                <img src={bell} alt="bell" />
                <img src={userPic} alt="userPic" />
            </div>
        </div>
    )
}

export default TopNav;