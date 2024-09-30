import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Edit from './Edit';
import { useSelector } from 'react-redux';
import Remove from './Remove';

function Notes() {

    const { Notes } = useSelector((state) => state.noteReducer)

    return (
        <>
            <div className='mx-4'>
                <div className='container-fluid shadow mb-5 p-4 rounded' style={{backgroundColor:'whitesmoke'}}>
                    <Row>
                        {
                            Notes?.length > 0 ?
                                Notes.map(item => (
                                    <Col md={4} className='mb-4'>
                                        <Card style={{ height: '14rem' }} className='shadow'>
                                            <Card.Body style={{ overflow: 'auto' }}>
                                                <Card.Title className='fw-bold text-center'><h2>{item.title}</h2></Card.Title>
                                                <p className='text-center' style={{color:'goldenrod'}}>{item.time}</p>
                                                <Card.Text>
                                                    <p className='fs-5'>{item.content}</p>
                                                </Card.Text>
                                            </Card.Body>
                                            <div className='d-flex justify-content-center'>
                                                <Edit edit={item} />
                                                <Remove remove={item} />
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                                :
                                <h3 className='text-center text-black'>No notes yet! Start by adding your first note</h3>
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Notes