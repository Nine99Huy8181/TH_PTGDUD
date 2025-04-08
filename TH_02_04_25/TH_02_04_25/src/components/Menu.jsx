import React from 'react'
import {NavLink} from 'react-router-dom'
import { useLabelContext } from '../hooks/LabelContex'

export default function Menu() {
  const {setLabelHeader} = useLabelContext();
  const changLabel = (label) => {
    setLabelHeader(label);
  }
  return (
    <>
        <ul>
            <img src="../images/Image 1858.png" alt="" />
            <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" />
            <NavLink onClick={() => changLabel("DashBoard")} to="/" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Dash board</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Folder.png" alt="" />
            <NavLink onClick={() => changLabel("Project")} to="/project" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Project</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Groups.png" alt="" />
            <NavLink onClick={() => changLabel("Teams")} to="/teams" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Teams</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" />
            <NavLink onClick={() => changLabel("Analytics")} to="/analytics" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Analytics</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Chat.png" alt="" />
            <NavLink onClick={() => changLabel("Messages")} to="/messages" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Messages</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Code.png" alt="" />
            <NavLink onClick={() => changLabel("Integrations")} to="/integrations" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Integrations</NavLink></li>
        </ul>
        <div id='try-now'>
            <h2>V2.0 is available</h2>
            <button>Try now</button>
        </div>
    </>
  )
}
