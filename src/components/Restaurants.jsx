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
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Restaurants() {
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
  /*  const handleRadioCheck = e => {
    setserviceAtTable(e.target.name);
  };
 */
  const handleChange = e => {
    dispatch({
      type: e.target.checked ? ADD_ACTIVITY : REMOVE_ACTIVITY,
      payload: {
        type: "Restaurant",
        activities: e.target.name
      }
    });
  };

  const sendDatas = () => {
    dispatch({
      // type: ADD_RESTAURANTS,
      // payload: { selection: selected, preference: serviceAtTable }
    });
  };

  return (
    <Col xs="12" sm="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Traiteur et boissons</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          <ModalHeader className="header">
            <FontAwesomeIcon classname="icon" icon={faUtensils} size="4x" />
            <h2>Traiteur et boissons </h2>
          </ModalHeader>
          {services.Restaurants.style.map((Restaurants, i) => {
            return (
              <>
                <Row>
                  <CustomInput
                    type="switch"
                    name={Restaurants.name}
                    id={i}
                    checked={servicesStore.some(
                      s => s.activities === Restaurants.name
                    )}
                    onChange={handleChange}
                  />{" "}
                  {Restaurants.name}
                </Row>
              </>
            );
          })}
          {/* <input
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
          Debout */}
        </MyModal>
      </Card>
    </Col>
  );
}

export default Restaurants;
