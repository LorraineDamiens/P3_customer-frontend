import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function NestedModal({ name, photo, isOpen, toggle }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Exemple de lieu {name}</ModalHeader>
      <ModalBody>
        <img src={photo} className="img-fluid" alt="exemple lieu" />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Fermer
        </Button>
      </ModalFooter>
    </Modal>
  );
}
