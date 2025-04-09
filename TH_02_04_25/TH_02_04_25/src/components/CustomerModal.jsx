import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { updateCustomer, createCustomer} from '../api/customerApi.api';
import { Last } from 'react-bootstrap/esm/PageItem';
import { useLabelContext } from '../hooks/LabelContex';

export default function CustomerModal({ showModal, handleCloseModal, text, customer}) {
    const [formData, setFormData] = useState({
        customer_name: '',
        company: '',
        order_value: 0,
        order_date: null,
        status: '',
        image: ''
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const {updatePage ,setUpdatePage} = useLabelContext();

    useEffect(() => {
        if (customer) {
            setFormData({
                customer_name: customer.customer_name || '',
                company: customer.company || '',
                order_value: customer.order_value || 0,
                order_date: customer.order_date || null,
                status: customer.status || ''
            });
            
            if (customer.order_date) {
                setSelectedDate(new Date(customer.order_date));
            }
        } else {
            setFormData({
                customer_name: '',
                company: '',
                order_value: 0,
                order_date: null,
                status: ''
            });
            setSelectedDate(null);
        }
    }, [customer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        console.log(imageUrl)
        setFormData(prev => ({
            ...prev,
            [e.target.name]: imageUrl
        }));
    }

    const handleSubmit = async () => {
        if(customer){ 
            await updateCustomer(customer.id, formData)
            setUpdatePage(!updatePage);
        }
        else {
            await createCustomer(formData)
            setUpdatePage(!updatePage)
        }
        
        handleCloseModal();
    };

    return (
        <Modal centered show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{text} report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer name</Form.Label>
                        <Form.Control
                            name="customer_name"
                            value={formData.customer_name}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Alice"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Vinfast"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Order value</Form.Label>
                        <Form.Control
                            name="order_value"
                            value={formData.order_value}
                            onChange={handleInputChange}
                            type="number"
                            placeholder="1000"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Order date</Form.Label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date)
                                setFormData({...formData, order_date: date})
                            }}
                            placeholderText='dd-mm-yyyy'
                            dateFormat="dd-MM-yyyy"
                            className="form-control"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                        >
                            <option value="">Choose</option>
                            <option value="New">New</option>
                            <option value="Completed">Completed</option>
                            <option value="In-progress">In-progress</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Control type="file" 
                        name="image"
                        onChange={handleImageChange}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    {text}
                </Button>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}