import React, { useState } from "react";
import cube from  "../logos/Settings/cube-outline.svg";
import fileminus from "../logos/Settings/file-minus-02.svg";
import user from  "../logos/Settings/users.svg";
import grid from  "../logos/Settings/grid.svg";
import group60 from  "../logos/Settings/Group 60.svg";
import layers from  "../logos/Settings/layers-three-01.svg";
import lightbulb from  "../logos/Settings/lightbulb-05.svg";
import list from  "../logos/Settings/list.svg";
import logout from  "../logos/Settings/log-out-02.svg";
import messageChat from  "../logos/Settings/message-chat-square.svg";
import pieChart from  "../logos/Settings/pie-chart.svg";



let topLogos = [
    grid,lightbulb,user,fileminus,list,layers,cube,pieChart
]

let downLogos = [
    messageChat,logout
]

const SideStrip = ()=>{
    const [topLogo, setTopLogo] = useState(topLogos)
    const [downLogo, setDownLogo] = useState(downLogos)
    return (
        <div className="strip">
            <div className="mainLogo">
                <img src={group60} alt="group60" />
            </div>
            <div className="topLogo">
                {topLogo.map((ele)=>{
                    return <img src={ele} key={ele+".logos"} alt={ele} />
                })}
            </div>
            <div className="downLogo">
                {downLogo.map((ele)=>{
                    return <img src={ele} key={ele+".logos"} alt={ele} />
                })}
            </div>
        </div>
    )
}

export default SideStrip;