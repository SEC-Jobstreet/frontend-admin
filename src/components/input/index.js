import { useState } from "react";
import "./index.css";

function CustomInput(props) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="input-field">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        pattern={props.pattern}
        required={props.required}
        onBlur={(e) => setFocused(true)}
        focused={focused.toString()}
      />
      <span className="error-line">{props.errorMessage}</span>
      {props.children}
    </div>
  );
}

export default CustomInput;
