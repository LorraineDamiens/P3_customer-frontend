import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  InputGroup,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Row
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function CompanyInfo({ dispatch }) {
  const [values, setValues] = useState({});
  const [name, setName] = useState("");
  const [companyFunction, setcompanyFunction] = useState("");
  const [comment, setComment] = useState("");
  const events = [
    { name: "presse", label: "Conférence de presse" },
    { name: "produit", label: "Lancement de produit" },
    { name: "cocktail", label: "Cocktail dînatoire" },
    { name: "prix", label: "Remise de prix" },
    { name: "anniversaire", label: "Anniversaire d'entreprise" },
    { name: "build", label: "Team building" },
    { name: "seminaire", label: "Séminaires" },
    { name: "congres", label: "Congrès" }
  ];

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked
    });
  };

  const sendDatas = pathname => {
    if (values && name && companyFunction) {
      dispatch({
        type: "COMPANY_EVENT_CHOICE",
        payload: {
          companyName: name,
          companyFunction,
          comment,
          ...values
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
      <Row>
        <Card className="custform">
          <CardHeader>Si vous êtes une société:</CardHeader>
          <CardBody>
            <CardText>
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
                    />{" "}
                  </Label>
                </FormGroup>
                {events.map(({ name, label }, i) => {
                  return (
                    <FormGroup check key={i}>
                      <Label check>
                        <Input
                          type="checkbox"
                          id="checkbox"
                          name={name}
                          onClick={handleChange}
                        />
                        {label}
                      </Label>
                    </FormGroup>
                  );
                })}
                <InputGroup>
                  <Input
                    type="textarea"
                    name="comments"
                    placeholder="Autres"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </CardText>
            <Button onClick={goBack}>Précédent</Button>
            <Button onClick={() => sendDatas("/misc")}>Continuer</Button>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default connect()(CompanyInfo);
