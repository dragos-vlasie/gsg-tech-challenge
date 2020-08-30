import React from "react";

export const Text = ({ label, level = 1, width, string }) => {
  const styles = {
    label: {
      margin: "0",
      position: "relative",
      border: "1px solid",
      display: "inline-block",
      padding: "0 16px",
      borderRadius: "8px",
      width: `${width}`,
      color: "white",
    },
    span: {
      background: "#fff",
      width: "2px",
      height: "8px",
      display: "block",
      position: "absolute",
      top: "-9px",
      left: "0",
      right: "0",
      margin: "auto",
    },
  };

  return (
    <div>
      <h4 style={styles.label}>
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
