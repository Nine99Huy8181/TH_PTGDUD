import React, { useState } from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import DatePicker from 'react-datepicker';

export default function CustomerModal({showModal, handleCloseModal, text}) {
    const [date, setDate] = useState(null);
  return (
    <Modal centered show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>{text} report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Customer name</Form.Label>
            <Form.Control type="text" placeholder="Alice" />
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Vinfast" />
            <Form.Label>Order value</Form.Label>
            <Form.Control type="text" placeholder="1000" />
            <Form.Label>Order date</Form.Label>
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                placeholderText='dd-mm-yyyy'
                dateFormat="dd-MM-yyyy"
            id='input-date'></DatePicker>
            <Form.Label>Status</Form.Label>
            <Form.Select>
                <option>Choose</option>
                <option>New</option>
                <option>Completed</option>
                <option>In-progress</option>
            </Form.Select>
        </Modal.Body>
        <Modal.Footer>
            <Button block variant="primary" onClick={() => console.log("Primary")}>
                {text}
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
  )
}
