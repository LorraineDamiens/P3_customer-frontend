import React from "react";
import { Modal, ModalFooter, Button, ModalBody } from "reactstrap";

function MyModal({ isOpen, toggle, dispatch, children }) {
  const handleClick = () => {
    toggle();
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Fermer
          </Button>
          <Button onClick={handleClick}>Valider</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default MyModal;
