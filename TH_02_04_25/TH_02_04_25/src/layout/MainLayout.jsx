import React, { useEffect, useState } from 'react'
import './MainLayout.css'
import Statistics from '../components/Statistics'
import TableCustomer from '../components/TableCustomer/TableCustomer';
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

export default function MainLayout() {
    const [data, setData] = useState([])
    const [dataCustomer, setDataCustomer] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("https://67c81bf20acf98d07084e0cf.mockapi.io/Statistics")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        fetch("https://67c81bf20acf98d07084e0cf.mockapi.io/customers")
        .then(res => res.json())
        .then(data => setDataCustomer(data))
    }, [])

    useEffect(() => {
        navigate('/dashboard', { replace: true });
      }, []);


  return (
    <div id='main'>
        <div id='menu'>
            <ul>
                <img src="../images/Image 1858.png" alt="" />
                <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" />
                <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Dash board</NavLink></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Folder.png" alt="" />
                <NavLink to="/project" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Project</NavLink></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Groups.png" alt="" />
                <NavLink to="/teams" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Teams</NavLink></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" />
                <NavLink to="/analytics" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Analytics</NavLink></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Chat.png" alt="" />
                <NavLink to="/messages" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Messages</NavLink></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Code.png" alt="" />
                <NavLink to="/intergrations" className={({isActive}) => isActive ? "active-link" : "normal-link"} href="#">Integrations</NavLink></li>
            </ul>
            <div id='try-now'>
                <h2>V2.0 is available</h2>
                <button>Try now</button>
            </div>
        </div>
        <div id='header'>
            <p style={{color: "#ec4d84", fontWeight: "bold", fontSize: "25px", fontFamily: "sans-serif"}}>Dashboard</p>
            <div id='content-header'>
                <input type="text" name="" id="search" placeholder='Search...'/>
                <img src="../images/Bell 1.png" alt="" />
                <img src="../images/Question 1.png" alt="" />
                <img src="../images/Avatar (1).png" alt=""/>
            </div>
        </div>
        <div id='content'>
            <div>
                <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                    <img src="../images/Squares four 1.png" alt="" style={{marginRight: "5px"}}/>
                    <span style={{fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px"}}>Overview</span>
                </div>
                <div id='div-component'>
                    {
                        data.map((st) => {
                            return(
                                <Statistics key={st.id} st={st}></Statistics>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{marginTop: "30px"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src="../images/File text 1.png" alt="" style={{marginRight: "5px"}}/>
                        <span style={{fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px"}}>Detail report</span>
                    </div>
                    <div>
                        <button id='import'>Import</button>
                        <button id='export'>Export</button>
                    </div>
                </div>
                <div id='div-table'>
                    <TableCustomer dataCustomer={dataCustomer}></TableCustomer>
                </div>
            </div>
        </div>
    </div>
  )
}
