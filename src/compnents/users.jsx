import React from "react";
import UsersTab from "./userTabel";
import InviteTable from "./inviteTable";

const Userbox = ()=>{

    return (
        <div className="userBox">
            <UsersTab />
            <hr />
            <InviteTable />
        </div>
    )
}

export default Userbox;