import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  InputGroup,
  Card,
  CardHeader,
  CardBody,
  Row
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { CUSTOMER_EVENT_CHOICE } from "../reducers/actionTypes";

function CustomerInfo({ dispatch, customer }) {
  const [eventType, setEventType] = useState("");
  const [events] = useState([
    { name: "mariage", label: "Mariage" },
    { name: "soirée", label: "Soirée" },
    { ...customer }
  ]);
  const history = useHistory();

  const handleRadio = e => {
    setEventType(e.target.id);
  };
  const handleInput = e => {
    setEventType(e.target.value);
  };

  const sendDatas = pathname => {
    if (eventType) {
      dispatch({
        type: CUSTOMER_EVENT_CHOICE,
        payload: {
          eventType
        }
      });
      history.push(pathname);
    }
  };

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="12" sm="8">
          <Card className="custform">
            <CardHeader>Si vous êtes un particulier:</CardHeader>
            <CardBody>
              {events.map(({ name, label }, i) => {
                return (
                  <FormGroup check key={i}>
                    <Label check>
                      <Input
                        type="radio"
                        id={name}
                        name="radio"
                        onClick={handleRadio}
                      />{" "}
                      {label}
                    </Label>
                  </FormGroup>
                );
              })}
              <InputGroup>
                <Input
                  type="text"
                  name="eventType"
                  placeholder="Autres"
                  value={eventType}
                  onChange={handleInput}
                />
              </InputGroup>

              <Button onClick={goBack}>Précédent</Button>
              <Button onClick={() => sendDatas("/misc")}>Continuer</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = state => {
  return {
    customer: state.customer
  };
};
export default connect(mapStateToProps)(CustomerInfo);
