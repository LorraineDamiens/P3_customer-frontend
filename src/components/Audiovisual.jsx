import React, { useState } from "react";
import { Card, CardTitle, Button, Col } from "reactstrap";
import { audiovisual } from "../datas";
import MyModal from "./Modal";
import { connect } from "react-redux";

function Audiovisual({ dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const data = (e, obj) => {
    let nextState = [...selected];

    if (e.target.checked) {
      nextState.push(obj);
    } else {
      nextState = nextState.filter(el => el.name !== obj.name);
    }
    setSelected(nextState);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sendDatas = () => {
    dispatch({ type: "AUDIOVISUAL", payload: selected });
  };

  return (
    <Col xs="6">
      <Card body style={{ height: "150px" }}>
        <CardTitle>Audiovisuel et Com</CardTitle>
        <Button onClick={toggle}>Sélectionner</Button>
        <MyModal isOpen={isOpen} toggle={toggle} dispatch={sendDatas}>
          {audiovisual.activities.map(audiovisual => {
            return (
              <>
                <input
                  type="checkbox"
                  name={audiovisual.name}
                  onChange={e => data(e, audiovisual)}
                />{" "}
                {audiovisual.name}
              </>
            );
          })}
        </MyModal>
      </Card>
    </Col>
  );
}

export default connect()(Audiovisual);
