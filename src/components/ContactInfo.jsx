import React, { useState } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Button
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function ContactInfo({ dispatch }) {
  const [values, setValues] = useState({});
  const history = useHistory();

  const sendDatas = pathname => {
    dispatch({ type: "ADD_CONTACT_INFOS", payload: values });
    history.push(pathname);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Form>
        <Row form>
          <Col>
            <FormGroup row>
              <Label for="clientFirstname">Prénom</Label>
              <Col>
                <Input
                  type="text"
                  name="clientFirstname"
                  id="clientFirstname"
                  placeholder="prénom"
                  value={values.clientFirstname}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup row>
              <Label for="clientLastname" xs="2">
                Nom
              </Label>
              <Col xs="10">
                <Input
                  type="text"
                  name="clientLastname"
                  id="clientLastname"
                  placeholder="nom"
                  value={values.clientLastname}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <FormGroup>
            <Label for="clientEmail">Email</Label>
            <Input
              type="email"
              name="clientEmail"
              id="clientEmail"
              placeholder="email"
              value={values.clientEmail}
              onChange={handleChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="clientTel">Téléphone</Label>
          <Input
            type="text"
            name="clientTel"
            id="clientTel"
            placeholder="téléphone"
            value={values.clientTel}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <Button onClick={() => sendDatas("/customer")}>I'm a customer</Button>
      <Button onClick={() => sendDatas("/company")}>I'm a company</Button>
    </Container>
  );
}

export default connect()(ContactInfo);
