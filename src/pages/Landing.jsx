import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <>
            <div className='container-fluid'>
                <Row>
                    <Col md={12} className='d-flex justify-content-center mt-4'>
                        <img className='mt-3' style={{ width: '40vh' }} src="https://www.shareicon.net/data/2016/02/04/713861_paper_512x512.png" alt="" />
                    </Col>
                    <Col md={12} className='mt-5 text-center'>
                        <div className='container'>
                            <p className='fw-bold text-black'>A Note App is a simple tool for creating, editing, and organizing personal notes. <br /> You can add, update, and delete your
                                notes with ease. It provides a clean interface for managing ideas, reminders, or to-do lists efficiently.</p>
                        </div>
                    </Col>
                </Row>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                    <Link className='btn btn-dark w-50 p-2' to={'./home'}><h5 className='fw-bold'>Get Started</h5></Link>
                </div>
            </div>
        </>
    )
}

export default Landing