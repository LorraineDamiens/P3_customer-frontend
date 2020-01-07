import React, { useState } from "react";
import { Card, CardTitle, Button, Col } from "reactstrap";
import { services } from "../datas";
import MyModal from "./Modal";
import { connect } from "react-redux";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../reducers/actionTypes";

function Restaurants({ dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [serviceAtTable, setserviceAtTable] = useState("");

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
    setserviceAtTable(e.target.name);
  };

  const handleChange = e => {
    dispatch({
      type: e.target.checked ? ADD_ACTIVITY : REMOVE_ACTIVITY,
      payload: {
        type: "restaurants",
        activity: e.target.name
      }
    });
  };

  const sendDatas = () => {
    dispatch({
      // type: ADD_RESTAURANTS,
      payload: { selection: selected, preference: serviceAtTable }
    });
  };

  return (
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Traiteur et boisson</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          {services.restaurants.style.map(restaurants => {
            return (
              <>
                <input
                  type="checkbox"
                  name={restaurants.name}
                  onChange={handleChange}
                />{" "}
                {restaurants.name}
              </>
            );
          })}
          <input
            type="radio"
            checked={serviceAtTable === serviceAtTable[0]}
            onChange={handleRadioCheck}
            name={serviceAtTable[0]}
          />{" "}
          Service à Table
          <input
            type="radio"
            checked={serviceAtTable === serviceAtTable[1]}
            onChange={handleRadioCheck}
            name={serviceAtTable[1]}
          />{" "}
          Debout
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Restaurants);
