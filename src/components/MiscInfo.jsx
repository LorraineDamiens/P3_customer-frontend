import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";
import { useHistory, Link, useLocation } from "react-router-dom";

function MiscInfo() {
  const location = useLocation();
  const [values, setValues] = useState({});
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Nombre d'invités</InputGroupText>
        </InputGroupAddon>
        <Input
          type="text"
          name="guest"
          placeholder="nombre"
          value={values.guest}
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
      <Button onClick={goBack}>Précédent</Button>

      <Button
        tag={Link}
        to={{
          pathname: "/services",
          state: {
            ...values,
            ...previousValues
          }
        }}
      >
        Choisir des prestations
      </Button>
    </>
  );
}

export default MiscInfo;
