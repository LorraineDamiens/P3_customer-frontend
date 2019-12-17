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
              <Label for="firstname">Prénom</Label>
              <Col>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="prénom"
                  value={values.firstname}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup row>
              <Label for="lastname" xs="2">
                Nom
              </Label>
              <Col xs="10">
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="nom"
                  value={values.lastname}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Téléphone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="téléphone"
            value={values.phone}
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
