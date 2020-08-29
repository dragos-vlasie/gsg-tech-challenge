import React from "react";

export const MenuOptions = ({ data }) => {
  const nestedItems =
    data.children &&
    data.children.map((nestedItem, index) => <MenuOptions key={"ingredient-" + index} data={nestedItem} />);
  return (
    <div className="MenuOptions">
      <h3>{data.label}</h3>
      {nestedItems}
    </div>
  );
};
export default MenuOptions;
