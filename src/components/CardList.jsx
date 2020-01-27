import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";

import Animations from "./Animations";
import Reception from "./Reception";
import Restaurants from "./Restaurants";
import Audiovisual from "./Audiovisual";
import Staff from "./Staff";
import Equipment from "./Equipment";

function CardList() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Row>
        <Animations />
        <Reception />
        <Restaurants />
        <Audiovisual />
        <Staff />
      </Row>

      <Button onClick={goBack}>Précédent</Button>

      <Button tag={Link} to="/confirmation">
        Terminer
      </Button>
    </Container>
  );
}

export default CardList;
