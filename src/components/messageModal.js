import React from 'react';


import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';

const MessageModal = (props) =>{

    return(
         < div > 
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalBody className={'text-center'}>
          Would you like to add {props.productDescription}?
          </ModalBody>
          <ModalFooter>
          <Button color="danger" className={'mr-auto'} size='sm' onClick={props.noToggleAdd}>Do not Add</Button>
          <Button color="success" size='sm' onClick={props.toggleAdd}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default MessageModal;