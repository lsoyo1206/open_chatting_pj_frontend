import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './TopNav.scss';

function CommonChatting() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const commonChattingBtn = () => {
        setShow(true)
    };

    const divStyle = {
        display: "inline"
    }
    
    return(
        <div style={divStyle}>


            <Button className="btn" variant="outline-warning" onClick={commonChattingBtn}>일반채팅</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>일반채팅</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer>
                        <Button className="btn_close" variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                    <Modal.Footer/>
                </Modal>
            
        </div>
    )
}
export default CommonChatting;
