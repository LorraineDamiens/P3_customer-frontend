import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import staffReducer from "../reducers/staffReducer";

function Confirmation({
  contact,
  event,
  misc,
  animations,
  reception,
  audiovisual,
  restaurants,
  staff
}) {
  const post = () => {
    const services = [staff];

    axios
      .post(
        "http://localhost:8089/api/orders",
        {},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
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
  return {
    contact: state.contact,
    company: state.company,
    customer: state.customer,
    misc: state.misc,
    reception: state.reception,
    restaurant: state.restaurants,
    animations: state.animations,
    audiovisual: state.audiovisual,
    staff: state.staff
  };
};

export default connect(mapStateToProps)(Confirmation);
