import React from "react";

const Select = props => {
  const handleChange = e => {
    console.log(e.target.value);
    props.test(e.target.value);

  };
  return (
    <select data-testid="select" onChange={handleChange}>
      <option data-testid="first" value="first">
        first
      </option>
      <option data-testid="second" value="second">
        second
      </option>
      <option data-testid="third" value="third">
        third
      </option>
    </select>
  );
};
export default Select;
