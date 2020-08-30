import React, { useState } from "react";
import Text from "./Text";

export const MenuOptions = ({ data = {}, level = 1, string = "" }) => {
  const [showNestedItems, show] = useState(false);

  if (!Object.keys(data).length) return <h2>No data to display</h2>;
  const ingredients =
    data.children &&
    (showNestedItems || level > 1) &&
    data.children.map((nestedItem, index) => (
      <MenuOptions key={"ingredient-" + index} data={nestedItem} level={level + 1} string={string} />
    ));

  let updatedWidth =
    !showNestedItems && level === 1
      ? "auto"
      : ingredients && ingredients.length === 4
      ? "60%"
      : ingredients && ingredients.length === 3
      ? "45%"
      : ingredients && ingredients.length === 2
      ? "40%"
      : "auto";

  return (
    <div style={{ display: "block", margin: "8px" }} onClick={() => show(!showNestedItems)}>
      <Text width={updatedWidth} label={data.label} level={level} string={string} />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>{ingredients}</div>
    </div>
  );
};
export default MenuOptions;
