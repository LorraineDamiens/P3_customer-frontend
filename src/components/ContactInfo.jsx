import React, { useState, useEffect } from "react";
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
  CardBody
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_CONTACT_INFOS } from "../reducers/actionTypes";

function ContactInfo({ dispatch, contact }) {
  const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const [values, setValues] = useState({
    clientFirstname: "",
    clientName: "",
    clientEmail: "",
    clientTel: ""
  });
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    values.clientName &&
    values.clientFirstname &&
    values.clientEmail.match(email) &&
    values.clientTel.toString().length >= 10
      ? setDisabled(false)
      : setDisabled(true);
  }, [values]);

  useEffect(() => {
    contact &&
      setValues({
        ...values,
        ...contact
      });
  }, [contact]);

  const sendDatas = (pathname, clientType) => {
    dispatch({ type: ADD_CONTACT_INFOS, payload: { ...values, clientType } });
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
      <h2>Préparez votre évènement!</h2>
      <Row className="justify-content-center no-gutters">
        <Col xs="12" sm="8">
          <Card className="cust">
            <CardHeader>Formulaire de contact:</CardHeader>
            <CardBody>
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
                            required
                          />
                        </Col>
                      </FormGroup>
                    </Col>

                    <Col>
                      <FormGroup row>
                        <Label for="clientName"></Label>
                        <Col>
                          <Input
                            type="text"
                            name="clientName"
                            id="clientName"
                            placeholder="Nom"
                            value={values.clientName}
                            onChange={handleChange}
                            required
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
                        required
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
                      required
                    />
                  </FormGroup>
                </Form>
              </Col>

              <Button
                disabled={disabled}
                onClick={() => sendDatas("/customer", "Particulier")}
              >
                Je suis un particulier
              </Button>
              <Button
                disabled={disabled}
                onClick={() => sendDatas("/company", "Entreprise")}
              >
                Je suis une société
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = state => {
  return {
    contact: state.contact
  };
};

export default connect(mapStateToProps)(ContactInfo);
