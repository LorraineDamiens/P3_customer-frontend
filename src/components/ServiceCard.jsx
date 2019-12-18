import React, { useState } from "react";
import { Card, CardTitle, Button, Col } from "reactstrap";

import MyModal from "./Modal";

const ServiceCard = ({ color, name, buttonColor, types }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Col xs="6">
        <Card body inverse color={color} style={{ height: "150px" }}>
          <CardTitle> {name}</CardTitle>
          <Button color={buttonColor} onClick={toggle}>
            Sélectionner
          </Button>
          <MyModal isOpen={isOpen} toggle={toggle} types={types} />
        </Card>
      </Col>
    </>
  );
};

export default ServiceCard;
