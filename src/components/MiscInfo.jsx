import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Container
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_MISC_INFOS } from "../reducers/actionTypes";

function MiscInfo({ dispatch }) {
  const [values, setValues] = useState({});

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const sendDatas = pathname => {
    if (values) {
      dispatch({ type: ADD_MISC_INFOS, payload: values });
      history.push(pathname);
    }
  };
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Container className="miscont">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre d'invités</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="nbGuests"
            placeholder="nombre"
            value={values.nbGuests}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Budget</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="budget"
            placeholder="budget"
            value={values.budget}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Date de l'évènement</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="date"
            placeholder="date"
            value={values.date}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Région</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="region"
            placeholder="région"
            value={values.region}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Ville</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="city"
            placeholder="ville"
            value={values.city}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Autres</InputGroupText>
          </InputGroupAddon>
          <Input
            type="textarea"
            name="comment"
            placeholder="commentaires"
            value={values.comment}
            onChange={handleChange}
          />
        </InputGroup>
        <Button onClick={goBack}>Précédent</Button>
        <Button onClick={() => sendDatas("/services")}>
          Choisir des prestations
        </Button>
      </Container>
    </>
  );
}

export default connect()(MiscInfo);
