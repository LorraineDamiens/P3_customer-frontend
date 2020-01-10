import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
<<<<<<< HEAD
import { Button } from "reactstrap";
=======
import { Button, Spinner} from "reactstrap";
<<<<<<< HEAD
import staffReducer from "../reducers/staffReducer";
>>>>>>> 3236ebe1a15efd50847fd3489c7ce9714843d7af
=======
>>>>>>> fbd85b6d204478d55f3597d6a4cbe541739136e9
import AlertWindow from "./Alert";

function Confirmation({ contact, company, misc, customer, services }) {
  const [recap, setRecap] = useState({
    ...contact,
    ...misc,
    ...company,
    ...customer,
    services
  });
<<<<<<< HEAD
<<<<<<< HEAD
  const [alert, setalert] = useState(false);
=======
  const [alert, setAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
>>>>>>> 3236ebe1a15efd50847fd3489c7ce9714843d7af
=======

  const [alert, setAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


>>>>>>> fbd85b6d204478d55f3597d6a4cbe541739136e9
  useEffect(() => {
    console.log(recap);
  }, []);

  const post = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:8089/api/orders", recap, {
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/json"
        }
      })
<<<<<<< HEAD
      .then(res => {
        console.log(res);
        setalert(true);
      })
=======
      .then(res => {console.log(res);setAlert(true);setIsLoading(false)})
<<<<<<< HEAD
>>>>>>> 3236ebe1a15efd50847fd3489c7ce9714843d7af
=======

 

>>>>>>> fbd85b6d204478d55f3597d6a4cbe541739136e9
      .catch(err => console.log(err));
  };
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <h1> Récapitulatif de votre demande</h1>

      <Button onClick={post}>Envoyer votre demande</Button>
      {alert ? <AlertWindow /> : <></>}
=======
      <h1> Récapitulatif de votre demande</h1>     
      
      {alert ? <AlertWindow/> : (<>{isLoading ? <Spinner type="grow" color="success" /> : <Button onClick={post}>Envoyer votre demande</Button>}</>)}
>>>>>>> 3236ebe1a15efd50847fd3489c7ce9714843d7af
=======

      <h1> Récapitulatif de votre demande</h1>     
      
      {alert ? <AlertWindow/> : (<>{isLoading ? <Spinner type="grow" color="success" /> : <Button onClick={post}>Envoyer votre demande</Button>}</>)}

>>>>>>> fbd85b6d204478d55f3597d6a4cbe541739136e9
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
