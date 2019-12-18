import React from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Container, CardGroup, Button } from "reactstrap";
import { services } from "../datas";
import ServiceCard from "./ServiceCard";
import SendDatas from "./SendDatas";

function CardList() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <CardGroup>
        {services.map(service => {
          return <ServiceCard {...service} key={service.id} />;
        })}
      </CardGroup>
      <Button onClick={goBack}>Précédent</Button>

      <SendDatas />
    </Container>
  );
}

export default CardList;
