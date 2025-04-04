import React from 'react'
import './MainLayout.css'

export default function MainLayout() {
  return (
    <div id='main'>
        <div id='menu'>
            <ul>
                <li><p>Logo</p></li>
                <li><a href="">Dash board</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Analytics</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">Integrations</a></li>
            </ul>
            <div id='try-now'>
                Try now
            </div>
        </div>
        <div id='header'>
            <p>Dash board</p>
            <div id='content-header'>
                <input type="text" name="" id=""/>
                <img src="../images/Bell 1.png" alt="" />
                <img src="../images/Question 1.png" alt="" />
                <img src="../images/Avatar (1).png" alt=""/>
            </div>
        </div>
        <div id='content'>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>Overview</p>
                </div>
                <div id='div-component'>
                    <div>Component</div>
                    <div>Component</div>
                    <div>Component</div>
                </div>
            </div>
            <div>
                <div>
                    <p>Detail report</p>
                </div>
                <div id='div-table'>
                    <table>
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
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
