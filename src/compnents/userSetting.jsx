import React, { useState } from "react";
import banknote from  "../logos/Settings/bank-note-01.svg";
import layoutgrid from  "../logos/Settings/layout-grid-01.svg";
import userCheck from  "../logos/Settings/user-check-01.svg";
import userSquare from  "../logos/Settings/user-square.svg";
import usersEdit from  "../logos/Settings/users-edit.svg";
import usersPlus from  "../logos/Settings/users-plus.svg";
import globe06 from  "../logos/Settings/globe-06.svg";

let subLogos = [
    {logo:userSquare, name: "Personal Information"},
    {logo:banknote, name: "Billing and Payment"},
    {logo:globe06, name: "Domains"},
    {logo:usersEdit, name: "User Managment"},
    {logo:userCheck, name: "Customer Experience"},
    {logo:layoutgrid, name: "Page Structure"},
    {logo:usersPlus, name: "Invite and Referrals"}
]

const SubNav = ()=>{
    const [subNavLogos, setSubNavLogos] = useState(subLogos);

    return (
        <div className="subCont">
            <div className="subNav">
                <div className="settings">Settings</div>
                <div className="subNavBox">
                    {subNavLogos.map((ele)=>{
                        return <div key={ele.logo+""+ele.name} className="setBox">
                            <img src={ele.logo} alt={ele.name} />
                            <div className="title">{ele.name}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default SubNav;