import React, { useState } from "react";
import { Modal, ModalFooter, Button, Table, Input } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

function MyModal({ isOpen, toggle, types }) {
  const location = useLocation();
  const [values, setValues] = useState({});
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <tbody>
        {types.map(type => {
          return (
            <Table key={type.label}>
              <tbody>
                <td className={type.color}>
                  <Input
                    type="checkbox"
                    id="checkbox"
                    name="label"
                    onClick={handleChange}
                  />{" "}
                  {type.label}
                </td>
              </tbody>
            </Table>
          );
        })}
      </tbody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Annuler
        </Button>
        <Button
          tag={Link}
          to={{
            url: "/api/order",
            state: {
              ...values,
              ...previousValues
            }
          }}
        >
          Enregistrer
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default MyModal;
