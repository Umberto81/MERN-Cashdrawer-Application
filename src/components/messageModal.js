import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';

const MessageModal = (props) =>{




    return(
         < div > 
        <Modal isOpen={props.modal} toggle={props.toggle} className={'modal-dialog-centered'}>
          <ModalBody className={'text-center'}>
          Would you like to add {props.productDescription}?
          </ModalBody>
          <ModalFooter>
          <Button color="danger" className={'mr-auto'} size='sm' onClick={props.noToggleAdd}>Do not Add</Button>
          <Button color="success" size='sm' onClick={() => props.toggleAdd(props.product)}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default MessageModal;