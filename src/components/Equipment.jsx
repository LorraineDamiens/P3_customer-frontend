import React, { useState } from "react";
import {
  Card,
  CardTitle,
  Button,
  Col,
  ModalHeader,
  CustomInput,
  Row
} from "reactstrap";
import { services } from "../datas";
import MyModal from "./Modal";
import { connect } from "react-redux";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../reducers/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";

function Equipment({ dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const data = (e, obj) => {
    let nextState = [...selected];

    if (e.target.checked) {
      nextState.push(obj);
    } else {
      nextState = nextState.filter(el => el.name !== obj.name);
    }
    setSelected(nextState);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = e => {
    dispatch({
      type: e.target.checked ? ADD_ACTIVITY : REMOVE_ACTIVITY,
      payload: {
        type: "Equipment",
        activities: e.target.name
      }
    });
  };

  const sendDatas = () => {
    dispatch({
      // type: "STAFF",
      payload: selected
    });
  };

  return (
    <Col xs="12" sm="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Equipement</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          <ModalHeader className="header">
            <FontAwesomeIcon classname="icon" icon={faChair} size="4x" />
            <h2>Equipement </h2>
          </ModalHeader>
          {services.Equipment.activities.map((Equipment, i) => {
            return (
              <>
                <Row>
                  <CustomInput
                    type="switch"
                    name={Equipment.name}
                    id={i}
                    onChange={handleChange}
                  />{" "}
                  {Equipment.name}
                </Row>
              </>
            );
          })}
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Equipment);
