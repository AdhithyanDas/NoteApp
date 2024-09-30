import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-black border-0 p-2">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold text-white d-flex ms-4'>
                        <img
                            alt=""
                            src='/images/notepad-pen.png'
                            width="45"
                            height="45"
                            className="d-inline-block align-top"
                        />
                        <h2 className='fw-bold mt-2'>NoteIt</h2>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header