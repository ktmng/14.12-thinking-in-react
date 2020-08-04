import React from "react";
import Form from "./Form.js";
import Summary from "./Summary.js";

export default function Main(props) {
  return (
    <main>
      <Form
        selected={props.selected}
        onUpdateFeature={props.onUpdateFeature}
      />
      <Summary selected={props.selected} />
    </main>
  );
}