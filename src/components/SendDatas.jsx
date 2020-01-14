import React, { useState } from "react";
import { Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SendDatas() {
  const location = useLocation();
  const [values, setValues] = useState({});
  const [previousValues, setPreviousValues] = useState(location);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const sendDatas = () => {
    console.log(values);
    axios
      .post("http://localhost:8089/api/orders", values, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return <Button onClick={sendDatas}>Envoyer la demande</Button>;
}

export default SendDatas;
