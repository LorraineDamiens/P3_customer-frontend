import React, { useState } from "react";
import { Card, CardTitle, Button, Col, Row } from "reactstrap";
import { services } from "../datas";

import MyModal from "./Modal";

const ServiceCard = ({ color, name, buttonColor, types }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Row>
        <Col xs="6">
          <Card className="servicescard" body inverse color={color}>
            <CardTitle> {name}</CardTitle>
            <Button color={buttonColor} onClick={toggle}>
              Sélectionner
            </Button>
            <MyModal isOpen={isOpen} toggle={toggle} types={types}>
              {services[0].component}
            </MyModal>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ServiceCard;
