import React from "react";
// import PropTypes from "prop-types";
function TextInput(props: TextInputProps) {
  let wrapperClass = "form-group";
  if (props.error) {
    wrapperClass = `${wrapperClass} has-error`;
  }
  return (
    <>
      <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            name={props.name}
            className="form-control"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </>
  );
}

export interface TextInputProps {
  id: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
}

TextInput.defaultProps = {
  id: undefined,
  name: "",
  label: "",
  onChange: undefined,
};
export default TextInput;
