import React from "react";

const styles = {
  label: {
    margin: "0",
    position: "relative",
    border: "1px solid",
    display: "inline-block",
    padding: "0 16px",
    borderRadius: "8px",
  },
  span: {
    width: "2px",
    height: "10px",
    background: "black",
    display: "block",
    position: "absolute",
    top: "-10px",
    left: "0",
    right: "0",
    margin: "auto",
  },
};

export const MenuOptions = ({ data = {}, level = 1 }) => {
  if (!Object.keys(data).length) return <h2>No data to display</h2>;

  const ingredients =
    data.children &&
    data.children.map((nestedItem, index) => (
      <MenuOptions key={"ingredient-" + index} data={nestedItem} level={level + 1} />
    ));

  return (
    <div style={{ display: "block", margin: "8px" }}>
      <h3 style={styles.label}>
        {data.label}
        {level > 1 ? <span style={styles.span}></span> : null}
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>{ingredients}</div>
    </div>
  );
};
export default MenuOptions;
