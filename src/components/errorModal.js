import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const ErrorModal = (props) =>{


    return(
         <div> 
        <Modal isOpen={props.modal} toggle={props.toggle} size='lg' className={'modal-dialog-centered'}>
        <ModalHeader className={'justify-content-center'}>ERROR</ModalHeader>
          <ModalBody className={'text-center'}>
            Error: {props.errors}
          </ModalBody>
          <ModalFooter>
          <Button color="danger" className={'mr-auto'} size='sm' onClick={props.toggle}>Go Back</Button>
          <Button color="success" size='sm' onClick={props.toggle}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default ErrorModal;