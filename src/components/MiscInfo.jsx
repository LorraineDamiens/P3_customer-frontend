import React, { useState, useEffect } from "react";
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

function MiscInfo({ dispatch, misc }) {
  const [regions] = useState([
    "Auvergne / Rhone Alpe",
    "Bourgogne / Franche Comté",
    "Bretagne",
    "Centre / Val de Loire",
    "Corse",
    "Grand Est",
    "Haut de France",
    "Ile de France",
    "Normandie",
    "Nouvelle Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence - Alpes - Cote d'Azur",
    "DOM - TOM"
  ]);

  const [region, setRegion] = useState("");
  const [values, setValues] = useState({
    nbGuests: "",
    budget: "",
    date: "",
    city: ""
  });

  const [date, setDate] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    values.nbGuests &&
    values.budget &&
    values.date &&
    region &&
    values.city.toString().length >= 1
      ? setDisabled(false)
      : setDisabled(true);
  }, [values, region]);

  useEffect(() => {
    misc &&
      setValues({
        ...values,
        region,
        ...misc
      });
  }, [misc]);

  const checkInt = (e, array) => {
    if (array.some(el => e.target.name === el)) {
      const value = parseInt(e.target.value, 10);
      return value;
    }
    return e.target.value;
  };

  const handleSelect = e => {
    setRegion(e.target.value);
  };

  const handleDate = e => {
    setDate(e.target.value);
    const [year, month, day] = e.target.value.split("-");
    const date = new Date(year, month, day).toISOString();
    setValues({
      ...values,
      date
    });
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: checkInt(e, ["nbGuests", "budget"])
    });
  };
  const sendDatas = pathname => {
    if (values) {
      dispatch({
        type: ADD_MISC_INFOS,
        payload: {
          ...values,
          region
        }
      });
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
            type="number"
            name="nbGuests"
            placeholder="Nombre d'invités"
            value={values.nbGuests}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Budget</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            name="budget"
            placeholder="Budget"
            value={values.budget}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Date de l'évènement</InputGroupText>
          </InputGroupAddon>
          <Input
            type="date"
            name="date"
            placeholder="Date"
            value={date}
            onChange={handleDate}
          />
        </InputGroup>
        {/* <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Région</InputGroupText>
          </InputGroupAddon> */}
        {/* <Input
            type="text"
            name="region"
            placeholder="Région"
            value={values.region}
            onChange={handleChange}
          />
        </InputGroup> */}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Region</InputGroupText>
          </InputGroupAddon>
          <Input
            type="select"
            name="select"
            id="region"
            onChange={handleSelect}
          >
            {regions.map(region => {
              return <option value={region}>{region}</option>;
            })}
          </Input>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Ville</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="city"
            placeholder="Ville"
            value={values.city}
            onChange={handleChange}
          />
        </InputGroup>
        <Button onClick={goBack}>Précédent</Button>
        <Button disabled={disabled} onClick={() => sendDatas("/services")}>
          Choisir des prestations
        </Button>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    misc: state.misc
  };
};

export default connect(mapStateToProps)(MiscInfo);
