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
         < div > 
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.oggle}>Would you like to add the item?</ModalHeader>
          <ModalBody className={'text-center'}>
            -----------
          </ModalBody>
          <ModalFooter>
          <Button color="danger" size='sm' onClick={props.toggle}>Do not Add</Button>

            <Button color="success" size='sm' onClick={props.toggleAdd}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default MessageModal;