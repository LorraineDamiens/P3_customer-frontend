import React, { useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Link } from "react-router-dom";

function ContactInfo() {
  const [values, setValues] = useState({});

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
      <Link
        to={{
          pathname: "/company",
          state: values
        }}
      >
        Je suis un professionnel
      </Link>
      <Link
        to={{
          pathname: "/customer",
          state: {
            ...values
          }
        }}
      >
        Je suis un particulier
      </Link>
    </Container>
  );
}

export default ContactInfo;
