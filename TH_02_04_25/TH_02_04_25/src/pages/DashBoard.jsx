import React, { useEffect, useState } from 'react'
import Statistics from '../components/Statistics';
import TableCustomer from '../components/TableCustomer/TableCustomer';
import CustomerModal from '../components/CustomerModal';
import { fetchCustomer, fetchStatistics, fetchCustomers } from '../api/customerApi.api';

export default function DashBoard() {
    const [data, setData] = useState([])
    const [dataCustomer, setDataCustomer] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const [stats, customers] = await Promise.all([
                    fetchStatistics(),
                    fetchCustomers(),
                ]);
                
                setData(stats);
                setDataCustomer(customers);
            } catch (error) {
                console.error("Failed to load data:", error);
            }
        };
        loadData();
    }, []);

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
                    <button
                        onClick={() => setShow(true)}
                    id='import'>Import</button>
                    <button id='export'>Export</button>
                </div>
            </div>
            <div id='div-table'>
                <TableCustomer dataCustomer={dataCustomer}></TableCustomer>
            </div>
        </div>
        <CustomerModal showModal={show} handleCloseModal={handleClose} text={"Add"} customer={null}></CustomerModal>
    </>
  )
}
