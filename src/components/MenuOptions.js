import React, { useState } from "react";
import Text from "./Text";

const menuHasString = (menu, level, string) => {
  const text = menu.label;
  const nestedItems = menu.children;

  if (string === "") {
    return true;
  }

  if (level > 1 && text?.match(new RegExp(string, "gi"))) {
    return true;
  }

  const mappings = nestedItems?.map((item) => menuHasString(item, level + 1, string));
  return mappings?.includes(true);
};

export const MenuOptions = ({ data = {}, level = 1, string = "" }) => {
  const [showNestedItems, show] = useState(false);

  if (level === 1 && !menuHasString(data, level, string)) return <h2>You can safely order {data.label}</h2>;
  if (!Object.keys(data).length) return <h2>No data to display</h2>;

  const ingredients =
    (showNestedItems || level > 1) &&
    data?.children?.map((nestedItem, index) => (
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
    <div style={{ display: "block", margin: "8px" }}>
      <Text
        widthValue={updatedWidth}
        label={data.label}
        level={level}
        string={string}
        onClick={() => show(!showNestedItems)}
      />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>{ingredients}</div>
    </div>
  );
};
export default MenuOptions;
