import React from "react";
import { Container, CardGroup } from "reactstrap";
import { services } from "../datas";
import ServiceCard from "./ServiceCard";

function CardList() {
  return (
    <Container>
      <CardGroup>
        {services.map(service => {
          return <ServiceCard {...service} key={service.id} />;
        })}
      </CardGroup>
    </Container>
  );
}

export default CardList;
