import React, { useState } from "react";
import { Modal, ModalFooter, Button, Table, Input } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function MyModal({ isOpen, toggle, types, dispatch }) {
  const location = useLocation();
  const [values, setValues] = useState({
    mariage: false,
    soiree: false
  });
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const sendDatas = () => {
    if (values) {
      dispatch({ type: "SERVICES", payload: values });
    }
  };

  return (
    <>
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
                      onChange={handleChange}
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
            color="secondary"
            onClick={toggle}
            tag={Link}
            to={{
              pathname: "/services",
              state: {
                ...values,
                ...previousValues
              }
            }}
          >
            Enregistrer et Continuer
          </Button>
          <Button onClick={sendDatas}>send to Redux</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default connect()(MyModal);
