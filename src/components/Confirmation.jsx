import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import AlertWindow from "./Alert";

function Confirmation({ contact, company, misc, customer, services }) {
  const [recap, setRecap] = useState({
    ...contact,
    ...misc,
    ...company,
    ...customer,
    services
  });
  const [alert, setalert] = useState(false);
  useEffect(() => {
    console.log(recap);
  }, []);

  const post = () => {
    axios
      .post("http://localhost:8089/api/orders", recap, {
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/json"
        }
      })
      .then(res => {
        console.log(res);
        setalert(true);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1> Récapitulatif de votre demande</h1>

      <Button onClick={post}>Envoyer votre demande</Button>
      {alert ? <AlertWindow /> : <></>}
    </>
  );
}

const mapStateToProps = state => {
  return {
    contact: state.contact,
    company: state.company,
    customer: state.customer,
    misc: state.misc,
    services: state.services
  };
};

export default connect(mapStateToProps)(Confirmation);
