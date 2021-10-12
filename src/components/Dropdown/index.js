import React, { Fragment } from "react";
import "./style.scss";

const index = ({ name, placeholder, value, onChange, error }) => {
  return (
    <div className={error ? "text-input input-error" : "text-input"}>
      <select
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <small className="error-text">{error}</small>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};

export default index;
