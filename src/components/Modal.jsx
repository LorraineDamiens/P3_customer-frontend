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
            Annuler
          </Button>
          <Button onClick={handleClick}>send to Redux</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default MyModal;
