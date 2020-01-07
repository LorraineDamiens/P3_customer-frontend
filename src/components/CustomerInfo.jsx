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
  const [values, setValues] = useState({});
  const [comment, setComment] = useState("");
  const events = [
    { name: "mariage", label: "Mariage" },
    { name: "soirée", label: "Soirée" }
  ];

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked
    });
  };

  const sendDatas = pathname => {
    if (values) {
      dispatch({
        type: "CUSTOMER_EVENT_CHOICE",
        payload: {
          comment,
          ...values
        }
      });
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
                {events.map(({ name, label }, i) => {
                  return (
                    <FormGroup check key={i}>
                      <Label check>
                        <Input
                          type="checkbox"
                          id="checkbox"
                          name={name}
                          onClick={handleChange}
                        />{" "}
                        {label}
                      </Label>
                    </FormGroup>
                  );
                })}
                <InputGroup>
                  <Input
                    type="textarea"
                    name="comments"
                    placeholder="Autres"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
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
