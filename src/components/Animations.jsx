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
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

function Animations({ dispatch }) {
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
        type: "Animation",
        activities: e.target.name
      }
    });
  };

  const sendDatas = () => {
    dispatch({
      // type: ADD_ANIMATION,
      payload: { selection: selected }
    });
  };

  return (
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Animations</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          <ModalHeader className="header">
            <FontAwesomeIcon classname="icon" icon={faGlassCheers} size="4x" />
            <h2>Animations</h2>
          </ModalHeader>
          {services.Animations.style.map((anim, i) => {
            return (
              <>
                <Row>
                  <CustomInput
                    type="switch"
                    name={anim.name}
                    id={i}
                    onChange={handleChange}
                  />{" "}
                  {anim.name}
                </Row>
              </>
            );
          })}
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Animations);
