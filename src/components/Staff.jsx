import React, { useState } from "react";
import { Card, CardTitle, Button, Col } from "reactstrap";
import { staff } from "../datas";
import MyModal from "./Modal";
import { connect } from "react-redux";

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

  const sendDatas = () => {
    dispatch({ type: "STAFF", payload: selected });
  };

  return (
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Staff</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          {staff.activities.map(staff => {
            return (
              <>
                <input
                  type="checkbox"
                  name={staff.name}
                  onChange={e => data(e, staff)}
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
