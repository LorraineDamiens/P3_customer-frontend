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
  staff
}) {
  const post = () => {
    axios
      .post(
        "http://localhost:8089/api/orders",
        {
          contact,
          event,
          misc,
          animations,
          reception,
          audiovisual,
          restaurants,
          staff
        },
        {}
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <Button onClick={post}>Envoyer votre demande</Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contact: state.contact,
    event: state.event,
    misc: state.misc,
    animations: state.animations,
    reception: state.reception,
    restaurants: state.restaurants,
    audiovisual: state.audiovisual,
    staff: state.staff
  };
};

export default connect(mapStateToProps)(Confirmation);
