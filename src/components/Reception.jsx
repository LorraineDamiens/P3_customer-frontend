import React, { useState } from "react";
import { Card, CardTitle, Button, Col } from "reactstrap";
import { services } from "../datas";
import MyModal from "./Modal";
import { connect } from "react-redux";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../reducers/actionTypes";

function Reception({ dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [inOrOut, setInOrOut] = useState("");

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

  const handleRadioCheck = e => {
    setInOrOut(e.target.name);
  };
  const handleChange = e => {
    dispatch({
      type: e.target.checked ? ADD_ACTIVITY : REMOVE_ACTIVITY,
      payload: {
        type: "reception",
        activity: e.target.name
      }
    });
  };

  const sendDatas = () => {
    dispatch({
      // type: "RECEPTION",
      payload: { selection: selected, preference: inOrOut }
    });
  };

  return (
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Lieu</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          {services.reception.style.map(reception => {
            return (
              <>
                <input
                  type="checkbox"
                  name={reception.name}
                  onChange={handleChange}
                />{" "}
                {reception.name}
              </>
            );
          })}
          {/*  <input
            type="radio"
            checked={inOrOut === fitForOutdoor[0]}
            onChange={handleRadioCheck}
            name={fitForOutdoor[0]}
          />{" "}
          Intérieur
          <input
            type="radio"
            checked={inOrOut === reception.fitForOutdoor[1]}
            onChange={handleRadioCheck}
            name={fitForOutdoor[1]}
          />{" "}
          Extérieur */}
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Reception);
