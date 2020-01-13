import React from "react";
import { Alert } from "reactstrap";

const AlertWindow = props => {
  return (
    <div>
      <Alert className="alert">
        <h4 className="alert-heading">ENVOYE !!</h4>
        <p>
          Votre commande a bien été envoyée. Notre équipe reprendra contact avec
          vous dans les plus brefs délais.
        </p>
        <hr />
        <p className="mb-0">Merci pour votre confiance.</p>
        <a className="mb-0 mt-5" href="/">
          Retour à la page d'accueil.
        </a>
      </Alert>
    </div>
  );
};

export default AlertWindow;
