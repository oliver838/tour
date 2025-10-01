import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const MyModal = ({image,info,modal,setModal}) => {
   

    const toggle = () => setModal(!modal);
  return (
    <div className='alma modal1'>
     
      <Modal className='alma modal1' isOpen={modal} toggle={toggle} >
        <ModalBody className='alma img-container modal1'>
          <img className="ModalImg" src={image} alt="" />
          
        </ModalBody>
        <ModalFooter className='alma'>
          {info}
        </ModalFooter>
      </Modal>
    </div>
  )
}

