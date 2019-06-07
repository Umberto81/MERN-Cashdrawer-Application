import React, {
} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

const MessageModal = (props) =>{

    return(
         <div>
        {/* <Button color="danger" onClick={toggle}>X</Button> */}
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.oggle} className={'text-center'}>Item Added to the list</ModalHeader>
          <ModalBody className={'text-center'}>
            Item Added!!!
          </ModalBody>
          <ModalFooter>
            <Button color="success" size='sm' onClick={props.toggle}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default MessageModal;