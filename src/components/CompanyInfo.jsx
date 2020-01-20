import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  InputGroup
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { COMPANY_EVENT_CHOICE } from "../reducers/actionTypes";

function CompanyInfo({ dispatch, company }) {
  const [eventType, setEventType] = useState("");
  const [values, setValues] = useState({
    ...company
  });

  const [name, setName] = useState("");
  const [companyFunction, setcompanyFunction] = useState("");
  const [events] = useState([
    { name: " Conférence de presse", label: "Conférence de presse" },
    { name: "Lancement de produit", label: "Lancement de produit" },
    { name: "Cocktail dînatoire", label: "Cocktail dînatoire" },
    { name: "Remise de prix", label: "Remise de prix" },
    { name: "Anniversaire d'entreprise", label: "Anniversaire d'entreprise" },
    { name: "Team building", label: "Team building" },
    { name: "Séminaires", label: "Séminaires" },
    { name: "Congrès", label: "Congrès" }
  ]);

  const history = useHistory();

  const handleRadio = e => {
    setEventType(e.target.id);
  };
  const handleInput = e => {
    setEventType(e.target.value);
  };

  const sendDatas = pathname => {
    if (values && name && companyFunction) {
      dispatch({
        type: COMPANY_EVENT_CHOICE,
        payload: {
          companyName: name,
          companyFunction,
          eventType
        }
      });
      history.push(pathname);
    }
  };

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <Row>
        <Card className="custform">
          <CardHeader>Si vous êtes une société:</CardHeader>
          <CardBody>
            <Col>
              <FormGroup>
                <Label for="textarea">
                  Nom de la société:
                  <Input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="textarea">
                  Fonction dans la société:
                  <Input
                    type="text"
                    name="companyFunction"
                    id="companyFunction"
                    value={companyFunction}
                    onChange={e => setcompanyFunction(e.target.value)}
                    required
                  />{" "}
                </Label>
              </FormGroup>
              {events.map(({ name, label }, i) => {
                return (
                  <FormGroup check key={i}>
                    <Label check>
                      <Input
                        type="radio"
                        id={name}
                        name="radio"
                        onClick={handleRadio}
                      />{" "}
                      {label}
                    </Label>
                  </FormGroup>
                );
              })}
              <br />
              <InputGroup>
                <Input
                  type="text"
                  name="eventType"
                  placeholder="Autres"
                  value={eventType}
                  onChange={handleInput}
                />
              </InputGroup>
            </Col>

            <Button onClick={goBack}>Précédent</Button>
            <Button onClick={() => sendDatas("/misc")}>Continuer</Button>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

const mapStateToProps = state => {
  return {
    company: state.company
  };
};

export default connect(mapStateToProps)(CompanyInfo);
