import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Menu() {
  return (
    <>
        <ul>
            <img src="../images/Image 1858.png" alt="" />
            <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" />
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Dash board</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Folder.png" alt="" />
            <NavLink to="/project" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Project</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Groups.png" alt="" />
            <NavLink to="/teams" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Teams</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" />
            <NavLink to="/analytics" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Analytics</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Chat.png" alt="" />
            <NavLink to="/messages" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Messages</NavLink></li>
            <li style={{paddingLeft: "10px"}}><img src="../images/Code.png" alt="" />
            <NavLink to="/integrations" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Integrations</NavLink></li>
        </ul>
        <div id='try-now'>
            <h2>V2.0 is available</h2>
            <button>Try now</button>
        </div>
    </>
  )
}
