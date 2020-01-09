import React, { useState } from "react";
import { Card, CardTitle, Button, Col } from "reactstrap";
import { services } from "../datas";
import MyModal from "./Modal";
import { connect } from "react-redux";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../reducers/actionTypes";

function Staff({ dispatch }) {
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
        type: "staff",
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
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Staff</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          {services.staff.activities.map(staff => {
            return (
              <>
                <input
                  type="checkbox"
                  name={staff.name}
                  onChange={handleChange}
                />{" "}
                {staff.name}
              </>
            );
          })}
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Staff);
