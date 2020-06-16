import React from "react";

const Select = props => {
  const handleChange = e => {
    console.log(e.target.value);
    props.test(e.target.value);

  };
  return (
    <select data-testid="select" onChange={handleChange} multiple={true} onClick={() => console.log('select clicked')}>
      <option data-testid="first" value="first">
        first
      </option>
      <option data-testid="second" value="second" onClick={() => console.log('second clicked')}>
        second
      </option>
      <option data-testid="third" value="third" onClick={() => console.log('third clicked')}>
        third
      </option>
    </select>
  );
};
export default Select;
