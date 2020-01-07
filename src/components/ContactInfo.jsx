import React, { useState } from "react";
import {
  Col,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_CONTACT_INFOS } from "../reducers/actionTypes";

function ContactInfo({ dispatch }) {
  const [values, setValues] = useState({});
  const history = useHistory();

  const sendDatas = pathname => {
    dispatch({ type: ADD_CONTACT_INFOS, payload: values });
    history.push(pathname);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Row>
        <Card className="custform">
          <CardHeader>Formulaire de contact:</CardHeader>
          <CardBody>
            <CardText>
              <Col>
                <Form>
                  <Row form>
                    <Col>
                      <FormGroup row>
                        <Label for="clientFirstname"></Label>
                        <Col>
                          <Input
                            type="text"
                            name="clientFirstname"
                            id="clientFirstname"
                            placeholder="Prénom"
                            value={values.clientFirstname}
                            onChange={handleChange}
                          />
                        </Col>
                      </FormGroup>
                    </Col>

                    <Col>
                      <FormGroup row>
                        <Label for="clientLastname"></Label>
                        <Col>
                          <Input
                            type="text"
                            name="clientLastname"
                            id="clientLastname"
                            placeholder="Nom"
                            value={values.clientLastname}
                            onChange={handleChange}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <FormGroup>
                      <Label for="clientEmail"></Label>
                      <Input
                        type="email"
                        name="clientEmail"
                        id="clientEmail"
                        placeholder="Email"
                        value={values.clientEmail}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label for="clientTel"></Label>
                    <Input
                      type="text"
                      name="clientTel"
                      id="clientTel"
                      placeholder="Téléphone"
                      value={values.clientTel}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Form>
              </Col>
            </CardText>
            <Button onClick={() => sendDatas("/customer")}>
              Je suis un particulier
            </Button>
            <Button onClick={() => sendDatas("/company")}>
              Je suis une société
            </Button>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default connect()(ContactInfo);
