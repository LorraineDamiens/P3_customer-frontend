import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import staffReducer from "../reducers/staffReducer";

function Confirmation({ contact, company, misc, customer, services }) {
  const [recap, setRecap] = useState({
    ...contact,
    ...misc,
    ...company,
    ...customer,
    services
  });
  useEffect(() => {
    console.log(recap);
  }, []);

  const post = () => {
    const recap2 = {
      companyName: "Ma boite",
      companyFunction: "PDG",
      eventType: "conférence de presse",
      nbGuests: 3,
      budget: 300,
      date: "2019-12-17T12:26:33.007Z",
      region: "Aquitaine",
      city: "Prigonrieux",
      comment: "nice",
      status: "En cours",
      services: [
        {
          type: "Audiovisual",
          activities: "Son",
          description: "Boom boom dans les oreilles"
        }
      ],
      clientName: "MONTANA",
      clientFirstname: "Tony",
      clientEmail: "bubu@baba.com",
      clientTel: "0836656565",
      clientType: "Particulier"
    };
    axios
      .post("http://localhost:8089/api/orders", recap, {
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/json"
        }
      })
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
    services: state.services
  };
};

export default connect(mapStateToProps)(Confirmation);
