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
import { faHome } from "@fortawesome/free-solid-svg-icons";
import NestedModal from "./NestedModal";
import { useEffect } from "react";

function Reception() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isNestedOpen, setIsNestedOpen] = useState({});
  const servicesStore = useSelector(state => state.services);
  const dispatch = useDispatch();
  // const [inOrOut, setInOrOut] = useState("");

  useEffect(() => {
    let nestedOpen = {};
    services.Reception.style.forEach(x => {
      nestedOpen = {
        ...nestedOpen,
        [x.id]: false
      };
      setIsNestedOpen(nestedOpen);
    });
  }, []);

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
  const toggleNested = id => {
    setIsNestedOpen({
      ...isNestedOpen,
      [id]: !isNestedOpen[id]
    });
  };

  /* const handleRadioCheck = e => {
    setInOrOut(e.target.name);
  }; */
  const handleChange = e => {
    dispatch({
      type: e.target.checked ? ADD_ACTIVITY : REMOVE_ACTIVITY,
      payload: {
        type: "Reception",
        activities: e.target.name
      }
    });
  };

  const sendDatas = () => {
    dispatch({
      // type: "RECEPTION",
      // payload: { selection: selected, preference: inOrOut }
    });
  };

  return (
    <Col xs="12" sm="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Lieu de réception</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          <ModalHeader className="header">
            <FontAwesomeIcon classname="icon" icon={faHome} size="4x" />
            <h2>Lieu de réception </h2>
          </ModalHeader>
          {services.Reception.style.map((Reception, i) => {
            return (
              <React.Fragment key={i}>
                <Row className="align-items-center ">
                  <CustomInput
                    type="switch"
                    name={Reception.name}
                    id={i}
                    checked={servicesStore.some(
                      s => s.activities === Reception.name
                    )}
                    onChange={handleChange}
                  />
                  {Reception.name}
                  <Button
                    $
                    size="sm"
                    onClick={() => toggleNested(Reception.id)}
                  >
                    Afficher photo
                  </Button>
                </Row>
                <NestedModal
                  {...Reception}
                  isOpen={isNestedOpen[Reception.id]}
                  toggle={() => toggleNested(Reception.id)}
                />
              </React.Fragment>
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

export default Reception;
