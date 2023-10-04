import React from "react";
import TopNav from "./topnav";
import Userbox from "./users";

const MainBox = ()=>{
    
    return (
        <div className="mainBox">
            <TopNav />
            <div className="titleText">
                <div>User Management</div>
                <div>Add or manage your Domains</div>
            </div>
            <Userbox />
        </div>
    )
}

export default MainBox;