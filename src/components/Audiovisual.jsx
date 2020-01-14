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
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Audiovisual({ dispatch }) {
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
        type: "Audiovisual",
        activities: e.target.name
      }
    });
  };
  const sendDatas = () => {
    dispatch({
      // type: "AUDIOVISUAL",
      payload: { selection: selected }
    });
  };

  return (
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Audiovisuel et Com</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          <ModalHeader className="header">
            <FontAwesomeIcon classname="icon" icon={faMusic} size="4x" />
            <h2>Audiovisuel et Communication </h2>
          </ModalHeader>

          {services.Audiovisual.activities.map((Audiovisual, i) => {
            return (
              <>
                <Row>
                  <CustomInput
                    type="switch"
                    name={Audiovisual.name}
                    id={i}
                    onChange={handleChange}
                  />{" "}
                  {Audiovisual.name}
                </Row>
              </>
            );
          })}
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Audiovisual);
