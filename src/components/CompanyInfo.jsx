import React, { useState } from "react";
import { FormGroup, Label, Input, Col, Button } from "reactstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function CompanyInfo({ dispatch }) {
  const location = useLocation();
  const [values, setValues] = useState({});
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    console.log(e.target.nodeName);

    setValues({
      ...values,
      [e.target.name]:
        e.target.nodeName === "TEXTAREA" ? e.target.value : e.target.checked
    });
  };
  const sendDatas = pathname => {
    if (values) {
      dispatch({ type: "COMPANY_EVENT_CHOICE", payload: values });
    }
  };
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <FormGroup tag="fieldset" rowsm={8}>
        <legend className="col-form-label col-sm-2">
          Si vous êtes une entreprise:
        </legend>
        <FormGroup row sm={4}>
          <Label for="textarea">Nom de l'entreprise</Label>
          <Col>
            <Input
              type="textarea"
              name="companyName"
              id="companyName"
              value={values.companyName}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row sm={4}>
          <Label for="textarea">Fonction dans l'entreprise</Label>
          <Col>
            <Input
              type="textarea"
              name="companyFunction"
              id="companyFunction"
              value={values.companyFunction}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <Col sm={10}>
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
              <Input type="checkbox" id="checkbox" name="prix" /> Remise de prix
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
              <Input type="checkbox" id="checkbox" name="congres" /> Congrès
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <Button onClick={goBack}>Précédent</Button>
      <Button onClick={() => sendDatas("/misc")}>Continuer</Button>

      {/* <Button
        tag={Link}
        to={{
          pathname: "/misc",
          state: {
            ...values,
            ...previousValues
          }
        }}
      >
        Continuer
      </Button> */}
    </>
  );
}

export default connect()(CompanyInfo);
