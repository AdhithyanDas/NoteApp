import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container-fluid bg-black p-5 text-white'>
                <Row>
                    <Col md={5}>
                        <h2 className='fw-bold'>NoteIt</h2>
                        <p style={{ textAlign: 'justify' }}>A Note App is a simple tool for creating, editing, and organizing personal notes. You can add, update, and delete your notes with ease. It provides a clean interface for managing ideas, reminders, or to-do lists efficiently.</p>
                    </Col>
                    <Col md={2} className='mb-3'>
                        <h4 className='fw-bold'>Links</h4>
                        <div className='d-flex flex-column justify-content-between'>
                            <Link to={'/'} className='text-white'>Landing</Link>
                            <Link to={'/home'} className='text-white'>Home</Link>
                        </div>
                    </Col>
                    <Col md={5}>
                        <h4 className='fw-bold'>Feedback</h4>
                        <textarea name="" id="" className='form-control'></textarea>
                        <button className='btn btn-dark mt-3'>Send</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer