import React, { useState } from "react";
import { FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useHistory, Link, useLocation } from "react-router-dom";
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

  const sendDatas = () => {
    if (values) {
      dispatch({ type: "CUSTOMER_EVENT_CHOICE", payload: values });
    }
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">
          Si vous êtes un particulier:
        </legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="checkbox"
                name="mariage"
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
                name="soiree"
                onClick={handleChange}
              />{" "}
              Soirée
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <Button onClick={sendDatas}>send to Redux</Button>
      <Button onClick={goBack}>Précédent</Button>

      <Button
        tag={Link}
        to={{
          pathname: "/misc",
          state: {
            ...values,
            ...previousValues
          }
        }}
      >
        Continuer
      </Button>
    </>
  );
}

export default connect()(CustomerInfo);
