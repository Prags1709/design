import React, { useState } from "react";
import userPic from  "../logos/Settings/Avatar.png";
import mail from  "../logos/Settings/mail-01.svg";
import trash from  "../logos/Settings/trash-03.svg";

const users = [
    {avatar: userPic, name: "Olivia Rhye", email: "olivia@untitledui.com", role: "", view: false},
    {avatar: userPic, name: "Phoenix Baker", email: "phoenix@untitledui.com", role: "Viewer", view: true},
    {avatar: userPic, name: "Lana steiner", email: "lana@untitledui.com", role: "Editor", view: true},
    {avatar: userPic, name: "Candice Wu", email: "candice@untitledui.com", role: "Designer", view: true},
    {avatar: userPic, name: "Natali Karh", email: "natali@untitledui.com", role: "Reviewer", view: true},
    {avatar: userPic, name: "Drew Cano", email: "drew@untitledui.com", role: "Admin", view: true},
]

const UsersTab = ()=>{
    const [usersData, setUsersData] = useState(users)

    return (
        <div className="userContainer">
            <div className="userinvite">
                <h5>Users</h5>
                <p>Add or Remove Users and manage their roles and permission</p>
                <div className="inviteButton">
                    <img src={mail} alt="inviteBox" />
                    <div>Invite People</div>
                </div>
            </div>
            <div className="usertable">
                <table>
                    <thead>
                        <tr>
                            <th key={"4234324"}>Name</th>
                            <th key={"role"}>Role</th>
                            <th key={"deletebox"}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((ele,index)=>{
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
                                <td>
                                    {ele.view && <select >
                                        <option value={ele.role}>{ele.role}</option>
                                    </select>}
                                </td>
                                <td className="trash">
                                    <img src={trash} alt="trash" />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersTab;