import React from "react";

function InputData({type,placeholder,Label}) {
  return (
    <>
    <input  type={type} placeholder={placeholder} />
    <label>{Label}</label>
    <span className="focus-border" />
    </>
  );
}

export default InputData;
