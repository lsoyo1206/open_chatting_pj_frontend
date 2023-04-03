import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import CommonChatting from './CommonChatting.js';
import OpenChatting from './OpenChatting.js';
import './TopNav.css';

function MyPage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const divStyle = {
        display: "inline"
    }

    return(
        <div>
            <div>
                <div className='divTop'>
                {/* <Button>open chatting</Button>{' '} */} 
                    <CommonChatting></CommonChatting>
                    <OpenChatting></OpenChatting>
                </div>

                <Button className="btn1" variant="outline-warning" onClick={handleShow} >로그인</Button>
                <Button className="btn2" variant="outline-warning" onClick={handleShow} >회원가입</Button>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header>
                        <Modal.Title>어서오세용</Modal.Title>
                        <Button variant="secondary">Close</Button>
                    </Modal.Header>

                    <Modal.Body>

                        
                    </Modal.Body>
                </Modal>
            </div>
            
        </div>
    )
}
export default MyPage;
