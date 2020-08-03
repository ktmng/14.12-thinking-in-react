import React from "react";
import slugify from "slugify";
import Option from "./Option.js";

export default function Feature(props) {
  const optionItems = props.options.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    const checked = item.name === props.selected[props.feature].name;

    return (
      <Option
        key={itemHash}
        itemHash={itemHash}
        item={item}
        feature={props.feature}
        checked={checked}
        onUpdateFeature={props.onUpdateFeature}
      />
    );
  });

  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {optionItems}
    </fieldset>
  );
}
