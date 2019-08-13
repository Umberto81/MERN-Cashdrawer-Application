import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { useSelector } from 'react-redux'


const ModalTotal = (props) =>{

  const total = useSelector(state => state.products.total);

    return(
         <div> 
        <Modal isOpen={props.modal} toggle={props.toggle} size='lg' className={'modal-dialog-centered'}>
        <ModalHeader  className={'justify-content-center'}>End of transaction</ModalHeader>
          <ModalBody className={'text-center'}>
          The change due is: {total}
          </ModalBody>
          <ModalFooter>
          <Button color="danger" className={'mr-auto'} size='sm' onClick={props.toggle}>Go Back</Button>
          <Button color="success" size='sm' onClick={props.resetAfterTotal}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default ModalTotal;