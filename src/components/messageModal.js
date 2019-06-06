import React, {
    useState
} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

const MessageModal = () =>{

 
     const [modal, setModal] = useState(true);

    const toggle = () =>{

        setModal(prevModal => !prevModal);
    }

    return(
         <div>
        {/* <Button color="danger" onClick={toggle}>X</Button> */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Item Added to the list</ModalHeader>
          <ModalBody>
            Item Added!!!
          </ModalBody>
          <ModalFooter>
            <Button color="success" size='sm' onClick={toggle}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default MessageModal;