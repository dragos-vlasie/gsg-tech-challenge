import React from "react";

export const SearchForm = ({ onChange, searchedInput }) => {
  return (
    <form style={{ margin: "16px 0" }}>
      <label style={{ display: "block" }}>
        Search allergens:
        <input style={{ marginLeft: "36px" }} onChange={onChange} value={searchedInput} type="text" label="label" />
      </label>
    </form>
  );
};
export default SearchForm;
