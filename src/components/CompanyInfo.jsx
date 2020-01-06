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
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function CompanyInfo({ dispatch }) {
  const location = useLocation();
  const [values, setValues] = useState({});
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.nodeName === "TEXTAREA" ? e.target.value : e.target.checked
    });
  };

  const sendDatas = pathname => {
    if (values) {
      dispatch({ type: "COMPANY_EVENT_CHOICE", payload: values });
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
                <FormGroup check>
                  <Label for="textarea">
                    Nom de la société:
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                    />{" "}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label for="textarea">
                    Fonction dans la société:
                    <Input
                      type="text"
                      name="companyFunction"
                      id="companyFunction"
                      value={values.companyFunction}
                      onChange={handleChange}
                    />{" "}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      name="presse"
                      onClick={handleChange}
                    />{" "}
                    Conférence de presse
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      name="produit"
                      onClick={handleChange}
                    />{" "}
                    Lancement de produit
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      name="cocktail"
                      onClick={handleChange}
                    />{" "}
                    Cocktail dînatoire
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox" name="prix" /> Remise
                    de prix
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox" name="anniversaire" />{" "}
                    Anniversaire d'entreprise
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox" name="building" /> Team
                    Building
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox" name="seminaires" />{" "}
                    Séminaires
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox" name="congres" />{" "}
                    Congrès
                  </Label>
                </FormGroup>
                <InputGroup>
                  <Input
                    type="textarea"
                    name="comments"
                    placeholder="Autres"
                    value={values.comment}
                    onChange={handleChange}
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
