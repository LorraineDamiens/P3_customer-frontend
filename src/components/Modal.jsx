import React from "react";
import { Modal, ModalFooter, Button } from "reactstrap";

function MyModal({ isOpen, toggle, dispatch, children }) {
  const handleClick = () => {
    dispatch();
    toggle();
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        {children}
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
