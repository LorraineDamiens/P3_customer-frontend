import React from "react";
import { Input, FormGroup, Label } from "reactstrap";

function Comments({ state, setState }) {
  const handleChange = e => {
    setState({
      ...state,
      comment: e.target.value
    });
  };

  const { comment } = state;
  return (
    <>
      <FormGroup>
        <Label for="exampleText">Rajouter un commentaire</Label>
        <Input
          type="textarea"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </FormGroup>
    </>
  );
}

export default Comments;
