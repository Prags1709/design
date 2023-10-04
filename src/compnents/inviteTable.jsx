import React, { useState } from "react";
import userPic from  "../logos/Settings/Avatar.png";

const users = [
    {avatar: userPic, name: "Olivia Rhye", email: "olivia@untitledui.com"},
    {avatar: userPic, name: "Phoenix Baker", email: "phoenix@untitledui.com"}
]

const InviteTable = ()=>{
    const [invite, setInvite] = useState(users);

    return (
        <div className="userContainer">
            <div className="userinvite">
                <h5>Pending Invites</h5>
                <p>Manage the status of user account invitations that have been sent out but have not yet been accepted by the recipients</p>
            </div>
            <div className="usertable">
                <table>
                    <thead>
                        <tr>
                            <th key={"42344343324"}>Name</th>
                            <th key={"handelbut"}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {invite.map((ele,index)=>{
                           return <tr key={ele.email+index}>
                                <td>
                                    <div className="nameCont">
                                        <img src={ele.avatar} alt={ele.name} /> 
                                        <div >
                                            <div className="name">{ele.name}</div>
                                            <div>{ele.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="trash">
                                    <div className="handelButton">
                                        <button className="resendbutton">Resend invite</button>
                                        <button className="revokebutton">Revoke invite</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InviteTable;