import React from "react";
import SummaryOption from "./SummaryOption.js";
import Total from "./Total.js";

export default function Summary(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <SummaryOption selected={props.selected} />
      <Total selected={props.selected} />
    </section>
  );
}