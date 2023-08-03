import React from "react";

function Button({name}) {
  return (
    <>
      <button
        type="submit"
        className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100"
      >
        <div className="icon-reverse-wrapper">
          <span className="btn-text">{name}</span>
          <span className="btn-icon">
            <i className="feather-arrow-right" />
          </span>
          <span className="btn-icon">
            <i className="feather-arrow-right" />
          </span>
        </div>
      </button>
    </>
  );
}

export default Button;
