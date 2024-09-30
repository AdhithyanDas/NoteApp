import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/slice/noteSlice';
import { toast } from 'react-toastify';

function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const [note, setNote] = useState({
        title: "", content: "", time: ""
    })

    const getCurrentTime = () => {
        const date = new Date()
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
    }

    const handleDispatch = () => {
        const { title, content } = note
        if (!title || !content) {
            toast.warning("Please enter valid information!")
        } else {
            const noteWithTime = { ...note, time: getCurrentTime() }
            console.log(note);
            dispatch(addNote(noteWithTime))
            handleClose()
            setNote({
                title: "", content: "", time: ""
            })
            toast.success("Note added successfully!")
        }
    }


    return (
        <>
            <div className='my-5 d-flex justify-content-center'>
                <button className='btn fw-bold text-white bg-dark fs-5' onClick={handleShow}>Create Note +</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>Add Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="" label="Title">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setNote({ ...note, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel className='mt-3' controlId="" label="Content" >
                        <Form.Control
                            onChange={(e) => { setNote({ ...note, content: e.target.value }) }}
                            as="textarea"
                            placeholder=""
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleDispatch}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add