import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { useSelector } from 'react-redux'


const ModalTotal = (props) =>{

  const total = useSelector(state => state.total);

    return(
         <fragment> 
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalBody className={'text-center'}>
          The change due is: {total}
          </ModalBody>
          <ModalFooter>
          <Button color="danger" className={'mr-auto'} size='sm' onClick={props.toggle}>Do not Add</Button>
          <Button color="success" size='sm' onClick={props.toggle}>OK</Button>
          </ModalFooter>
        </Modal>
      </fragment>
    )
}

export default ModalTotal;