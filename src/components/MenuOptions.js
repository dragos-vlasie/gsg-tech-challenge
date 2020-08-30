import React, { useState } from "react";
import Text from "./Text";

export const MenuOptions = ({ data = {}, level = 1 }) => {
  const [showNestedItems, show] = useState(false);

  if (!Object.keys(data).length) return <h2>No data to display</h2>;

  const ingredients =
    data.children &&
    (showNestedItems || level > 1) &&
    data.children.map((nestedItem, index) => (
      <MenuOptions key={"ingredient-" + index} data={nestedItem} level={level + 1} />
    ));

  const updatedWidth =
    ingredients && ingredients.length === 4
      ? "520px"
      : ingredients && ingredients.length === 3
      ? "350px"
      : ingredients && ingredients.length === 2
      ? "152px"
      : "90x";

  return (
    <div style={{ display: "block", margin: "8px" }} onClick={() => show(!showNestedItems)}>
      <Text width={updatedWidth} label={data.label} level={level} />
      <div style={{ display: "flex", justifyContent: "center" }}>{ingredients}</div>
    </div>
  );
};
export default MenuOptions;
