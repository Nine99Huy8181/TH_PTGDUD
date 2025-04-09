import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import CustomerModal from '../CustomerModal';

export default function TableCustomer({dataCustomer}) {
    const [selectedCustomer, setSelectedCustomer] = useState([])
    const [show, setShow] = useState(false);
    const customerNameColumn = (customer) => (
        <span style={{display: 'flex', alignItems: 'center'}}><img src={customer.image} alt="" />
        <span style={{marginLeft: '10px', fontWeight: 'bold'}}>{customer.customer_name}</span></span>
    );
    const companyColumn = (customer) => (
        <span>{customer.company}</span>
    )

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
    const priceBodyTemplate = (customer) => {
        return formatCurrency(customer.order_value)
    }

    const getSeverity = (customer) => {
        switch(customer.status){
            case 'New':
                return 'primary';
            case 'In-progress':
                return 'warning';
            case 'Completed':
                return 'success'
            default:
                console.log(customer.status)
                return null;
        }
            
    }
    const statusBodyTemplate = (customer) => {
        return <Tag value={customer.status} severity={getSeverity(customer)} rounded></Tag>
    }

    const footer = `${dataCustomer ? dataCustomer.length : 0} results`;

    const buttonUpdate = () => {
        return <button
        className='btn-update-customer'
            onClick={() => setShow(true)}
            style={{
                backgroundImage: `url('../images/create.png')`,
                backgroundPosition: "center",
                backgroundColor: "transparent",
                border: "none",
                width: "20px",
                height: "20px",
            }}
        >     </button>
    }
    
    const handleClose = () => setShow(false);
        
  return (
   <>
     <DataTable value={dataCustomer} 
     paginator rows={6} paginatorLeft={footer} paginatorClassName='custom-paginator'
     selectionMode={'checkbox'} selection={selectedCustomer} 
     onSelectionChange={(e) => setSelectedCustomer(e.value)} dataKey="id" 
     tableStyle={{ minWidth: '100%'}}>
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column header="CUSTOMER NAME" body={customerNameColumn}></Column>
        <Column field="company" header="COMPANY"></Column>
        <Column field="order_value" header="ORDER VALUE" body={priceBodyTemplate}></Column>
        <Column field="order_date" header="ORDER DATE"></Column>
        <Column header="STATUS" body={statusBodyTemplate}></Column>
        <Column body={buttonUpdate}></Column>
    </DataTable>
    <CustomerModal showModal={show} handleCloseModal={handleClose} text={"Update"}></CustomerModal>
   </>
  )
}
