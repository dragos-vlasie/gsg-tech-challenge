import React from "react";

export const Text = ({ label, level = 1, widthValue, string, onClick }) => {
  const styles = {
    label: {
      margin: "0",
      position: "relative",
      border: "1px solid",
      display: "inline-block",
      padding: "4px 16px",
      borderRadius: "8px",
      width: `${widthValue}`,
      color: "white",
      cursor: "pointer",
    },
    span: {
      background: "#fff",
      width: "2px",
      height: "21px",
      display: "block",
      position: "absolute",
      top: "-21px",
      left: "0",
      right: "0",
      margin: "auto",
    },
  };

  return (
    <div
      style={{
        margin: "6px 0",
      }}
    >
      <h4 style={styles.label} onClick={onClick}>
        {level > 1 ? <span style={styles.span}></span> : null}
        {level > 1 && string ? (
          <span
            dangerouslySetInnerHTML={{
              __html: label.replace(new RegExp(string, "gi"), (match) => `<mark>${match}</mark>`),
            }}
          />
        ) : (
          label
        )}
      </h4>
    </div>
  );
};
export default Text;
