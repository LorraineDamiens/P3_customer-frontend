import React from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Container, CardGroup, Button } from "reactstrap";

import SendDatas from "./SendDatas";
import Animations from "./Animations";
import Reception from "./Reception";
import Restaurants from "./Restaurants";
import Audiovisual from "./Audiovisual";
import Staff from "./Staff";

function CardList() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Animations />
      <Reception />
      <Restaurants />
      <Audiovisual />
      <Staff />
      <Button onClick={goBack}>Précédent</Button>

      <Button tag={Link} to="/confirmation">
        Terminer
      </Button>
    </Container>
  );
}

export default CardList;
