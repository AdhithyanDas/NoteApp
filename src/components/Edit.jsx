import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editNote } from '../redux/slice/noteSlice';

function Edit({ edit }) {

    const [show, setShow] = useState(false);
    const [editData, setEditData] = useState(edit)

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleUpdate = () => {
        const updatedNote = {
            ...editData,
            time: getCurrentTime()
        };
        dispatch(editNote({ oldTime: edit.time, newNote: updatedNote }))
        handleClose()
    }

    return (
        <>
            <button className='btn' style={{ color: 'goldenrod' }} onClick={handleShow}><i className="fa-regular fa-pen-to-square fs-5" /></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="" label="Title" >
                        <Form.Control type="text" placeholder="" value={editData?.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel className='mt-3' controlId="" label="Content">
                        <Form.Control
                            value={editData?.content}
                            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
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
                    <Button variant="dark" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit