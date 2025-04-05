import React, { useEffect, useState } from 'react'
import './MainLayout.css'
import Statistics from '../components/Statistics'

export default function MainLayout() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch("https://67c81bf20acf98d07084e0cf.mockapi.io/Statistics")
    .then(res => res.json())
    .then(data => setData(data))

    }, [])

  return (
    <div id='main'>
        <div id='menu'>
            <ul>
                <img src="../images/Image 1858.png" alt="" />
                <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" /><a href="">Dash board</a></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Folder.png" alt="" /><a href="">Project</a></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Groups.png" alt="" /><a href="">Teams</a></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Pie chart.png" alt="" /><a href="">Analytics</a></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Chat.png" alt="" /><a href="">Messages</a></li>
                <li style={{paddingLeft: "10px"}}><img src="../images/Code.png" alt="" /><a href="">Integrations</a></li>
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
                                <Statistics st={st}></Statistics>
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
                    <table>
                        <tbody>
                        <tr>
                            <th>Cusotomer name</th>
                            <th>Compan</th>
                            <th>Order value</th>
                            <th>Order date</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                        </tr>
                        <tr>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                        </tr>
                        <tr>
                            <td>Quoc Huy</td> 
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                            <td>Quoc Huy</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
