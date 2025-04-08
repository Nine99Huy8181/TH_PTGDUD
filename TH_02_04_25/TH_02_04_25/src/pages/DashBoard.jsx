import React, { useEffect, useState } from 'react'
import Statistics from '../components/Statistics';
import TableCustomer from '../components/TableCustomer/TableCustomer';
import Header from '../components/Header';

export default function DashBoard() {
    const [data, setData] = useState([])
    const [dataCustomer, setDataCustomer] = useState([]);
    
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
  return (
    <>
        <div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px", marginTop: "30px"}}>
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
    </>
  )
}
