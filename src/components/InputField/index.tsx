import * as React from "react";

export default function InputField({
  handleChange,
  label,
  ...otherProps
}: any) {
  return (
    <div className="form-element">
      <h5 className="login-form-text">{label}</h5>
      <input className="login-input" onChange={handleChange} {...otherProps} />
    </div>
  );
}
