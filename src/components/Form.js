import React from "react";
import Feature from "./Feature.js";
import FEATURES from "./FEATURES.js"

export default function Form(props) {
  const featureItems = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = FEATURES[feature];
    return (
      <Feature
        key={featureHash}
        feature={feature}
        options={options}
        onUpdateFeature={props.onUpdateFeature}
        selected={props.selected}
      />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {featureItems}
    </form>
  );
}