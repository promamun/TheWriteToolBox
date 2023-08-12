import React from "react";

function InputData({type,placeholder,Label,Required}) {
  return (
    <>
    <input  type={type} placeholder={placeholder} required={Required} />
    <label>{Label}</label>
    <span className="focus-border" />
    </>
  );
}

export default InputData;
