import React from 'react';
import { Alert } from 'reactstrap';

const AlertWindow = (props) => {
  return (
    <div>
      <Alert className="alert" color="success">
        <h4 className="alert-heading">ENVOYE !!</h4>
        <p>
          Votre Commmande a bien été envoyée, notre équipe va s'occuper de votre demande dans les plus brefs délais.
          Nous reprendrons contact avec vous par Mail afin de peaufiner les détails.
        </p>
        <hr />
        <p className="mb-0">
          Merci pour votre confiance. 
        </p>
        <a className="mb-0 mt-5" href="/">
          Redirection vers la page principale  
        </a>
      </Alert>
    </div>
  );
};

export default AlertWindow;