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
import { useSelector, useDispatch } from "react-redux";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../reducers/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function Staff() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const servicesStore = useSelector(state => state.services);
  const dispatch = useDispatch();

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
        type: "Staff",
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
        <CardTitle>Staff</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          <ModalHeader className="header">
            <FontAwesomeIcon classname="icon" icon={faUsers} size="4x" />
            <h2>Staff </h2>
          </ModalHeader>
          {services.Staff.activities.map((Staff, i) => {
            return (
              <>
                <Row>
                  <CustomInput
                    type="switch"
                    name={Staff.name}
                    id={i}
                    checked={servicesStore.some(
                      s => s.activities === Staff.name
                    )}
                    onChange={handleChange}
                  />{" "}
                  {Staff.name}
                </Row>
              </>
            );
          })}
        </MyModal>
      </Card>
    </Col>
  );
}

export default Staff;
