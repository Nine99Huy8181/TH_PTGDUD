import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import CustomerModal from '../CustomerModal';
import { fetchCustomer } from '../../api/customerApi.api';

export default function TableCustomer({ dataCustomer }) {
    const [selectedCustomer, setSelectedCustomer] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOpenModal = async (customer) => {
        setLoading(true);
        try {
            const customerDetail = await fetchCustomer(customer.id);
            setCurrentCustomer(customerDetail);
            setShowModal(true);
        } catch (error) {
            console.error("Failed to load customer details:", error);
            setCurrentCustomer(customer);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentCustomer(null);
    };

    const customerNameColumn = (customer) => (
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src={customer.image} alt="" style={{ width: 30, height: 30, borderRadius: '50%' }} />
            <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{customer.customer_name}</span>
        </span>
    );

    const formatCurrency = (value) => {
        return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || '$0.00';
    };

    const priceBodyTemplate = (customer) => formatCurrency(customer.order_value);

    const getSeverity = (status) => {
        switch (status) {
            case 'New': return 'primary';
            case 'In-progress': return 'warning';
            case 'Completed': return 'success';
            default: return null;
        }
    };

    const statusBodyTemplate = (customer) => (
        <Tag value={customer.status} severity={getSeverity(customer.status)} rounded />
    );

    const actionBodyTemplate = (customer) => (
        <button
            className="btn-update-customer"
            onClick={() => handleOpenModal(customer)}
            style={{
                background: "url('../images/create.png') center no-repeat",
                backgroundColor: "transparent",
                border: "none",
                width: "20px",
                height: "20px",
                cursor: "pointer"
            }}
            disabled={loading}
            aria-label="Edit customer"
        />
    );

    const footer = `${dataCustomer?.length || 0} ${dataCustomer?.length === 1 ? 'result' : 'results'}`;

    return (
        <>
            <DataTable
                value={dataCustomer || []}
                paginator
                rows={6}
                paginatorLeft={footer}
                paginatorClassName="custom-paginator"
                selectionMode="checkbox"
                selection={selectedCustomer}
                onSelectionChange={(e) => setSelectedCustomer(e.value)}
                dataKey="id"
                tableStyle={{ minWidth: '100%' }}
                loading={loading}
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column header="CUSTOMER NAME" body={customerNameColumn} />
                <Column field="company" header="COMPANY" />
                <Column header="ORDER VALUE" body={priceBodyTemplate} />
                <Column field="order_date" header="ORDER DATE" />
                <Column header="STATUS" body={statusBodyTemplate} />
                <Column body={actionBodyTemplate} header="ACTIONS" />
            </DataTable>

            <CustomerModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                text="Update"
                customer={currentCustomer}
            />
        </>
    );
}