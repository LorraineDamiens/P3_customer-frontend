import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button } from "reactstrap";

function Confirmation({
  contact,
  event,
  misc,
  animations,
  reception,
  audiovisual,
  restaurants,
  staff,
  store
}) {
  const post = () => {
    axios
      .post("http://localhost:8089/api/orders", store, {})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1> Récapitulatif de votre demande</h1>
      <Button onClick={post}>Envoyer votre demande</Button>
    </>
  );
}

const mapStateToProps = state => {
  const store = {
    companyName: state.companyName,
    companyFunction: state.companyFunction,
    eventType: state.eventType,
    nbGuests: state.nbGuests,
    budget: state.budget,
    date: state.date,
    region: state.region,
    city: state.city,
    comment: state.comment,
    services: [
      {
        services: state.services,
        activities: state.activities,
        style: state.style
      }
    ],
    clientName: state.clientName,
    clientFirstname: state.clientFirstname,
    clientEmail: state.clientEmail,
    clientTel: state.clientTel,
    clientType: state.clientType
  };
  return {
    store
  };
};

export default connect(mapStateToProps)(Confirmation);
