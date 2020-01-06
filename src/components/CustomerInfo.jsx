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
  CardText,
  Row
} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function CustomerInfo({ dispatch }) {
  const location = useLocation();
  const [values, setValues] = useState({});
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.nodeName === "TEXTAREA" ? e.target.value : e.target.checked
    });
  };

  const sendDatas = pathname => {
    if (values) {
      dispatch({ type: "CUSTOMER_EVENT_CHOICE", payload: values });
      history.push(pathname);
    }
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <Row>
        <Card className="custform">
          <CardHeader>Si vous êtes un particulier:</CardHeader>
          <CardBody>
            <CardText>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      name="eventType"
                      onClick={handleChange}
                    />{" "}
                    Mariage
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      name="eventType"
                      onClick={handleChange}
                    />{" "}
                    Soirée
                  </Label>
                </FormGroup>
                <InputGroup>
                  <Input
                    type="textarea"
                    name="comments"
                    placeholder="Autres"
                    value={values.comment}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </CardText>
            <Button onClick={goBack}>Précédent</Button>
            <Button onClick={() => sendDatas("/misc")}>Continuer</Button>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default connect()(CustomerInfo);
