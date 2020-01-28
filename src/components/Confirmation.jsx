import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, Spinner, Table, Card, Row, Col } from "reactstrap";

import Comments from "./Comments";
import AlertWindow from "./Alert";

function Confirmation() {
  const { companyName = "", companyFunction = "", eventType } = useSelector(
    state => state.company
  );
  const contact = useSelector(state => state.contact);
  const customer = useSelector(state => state.customer);
  const misc = useSelector(state => state.misc);
  const services = useSelector(state => state.services);

  const [recap, setRecap] = useState({
    comment: "",
    ...contact,
    ...misc,
    ...customer,
    services,
    companyName,
    companyFunction,
    eventType: !customer.eventType ? eventType : customer.eventType
  });

  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = ISOStringDate => {
    let [year, month, day] = ISOStringDate.split("-");
    day = day.split("T")[0];
    return `${day}/${month}/${year}`;
  };

  const post = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/orders`, recap, {
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/json"
        }
      })
      .then(res => {
        console.log(res);
        setAlert(true);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <Row className="justify-content-center">
        <h2>Récapitulatif de votre demande</h2>
        <Col xs="12" sm="12">
          <Card className="recapform">
            <Table>
              <tbody>
                <tr>
                  <td> Nom:</td>
                  <td>{recap.clientName}</td>
                </tr>
                <tr>
                  <td> Prénom:</td>
                  <td>{recap.clientFirstname}</td>
                </tr>
                <tr>
                  <td> Email:</td>
                  <td>{recap.clientEmail}</td>
                </tr>
                <tr>
                  <td> Téléphone:</td>
                  <td>{recap.clientTel}</td>
                </tr>
                <tr>
                  <td> Société:</td>
                  <td>{recap.companyName}</td>
                </tr>
                <tr>
                  <td>Nombre d'invités:</td>
                  <td>{recap.nbGuests}</td>
                </tr>
                <tr>
                  <td>Budget:</td>
                  <td>{recap.budget}</td>
                </tr>
                <tr>
                  <td>Date de l'évènement:</td>
                  <td>{formatDate(recap.date)}</td>
                </tr>
                <tr>
                  <td>Région:</td>
                  <td>{recap.region}</td>
                </tr>
                <tr>
                  <td>Ville:</td>
                  <td>{recap.city}</td>
                </tr>

                <tr>
                  <td>Type d'évènement:</td>
                  <td>{recap.eventType}</td>
                </tr>
                {recap.services.map(service => {
                  return (
                    <tr>
                      <td>{service.type}</td>
                      <td>{service.activities}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td>Commentaires:</td>
                  <td>{recap.comment}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card className="commentarea">
            <Comments state={recap} setState={setRecap} />
          </Card>
        </Col>
      </Row>
      {alert ? (
        <AlertWindow />
      ) : (
        <>
          {isLoading ? (
            <Spinner type="grow" />
          ) : (
            <Button onClick={post}>Envoyer votre demande</Button>
          )}
        </>
      )}{" "}
    </>
  );
}

export default Confirmation;
