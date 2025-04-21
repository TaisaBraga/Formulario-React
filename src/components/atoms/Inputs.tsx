import React from "react";
export interface IInputsProps {
  textDivId: string | "";
  labelFor: string | "";
  labelValue: string | "";
  inputType: string | "";
  placeholder: string | "";
  inputName: string | "";
  inputId: string | "";
  register?: any;
  checked?: boolean;
  error: string | "";
}

export default function Inputs(props: IInputsProps) {

  return (
    <div id={props.textDivId}>
      <label
        htmlFor={props?.labelFor}
        style={{ color: "#666666", fontFamily: "Noto Sans, sans-serif" }}
      >
        {props?.labelValue}
      </label>
      <input
        type={props?.inputType}
        {...props?.register}
        checked={props?.checked}
        id={props?.inputId}
        placeholder={props?.placeholder}
      />
      {props?.error && (
        <span style={{ color: "red", fontSize: "0.7rem" }}>
          {props?.error}
        </span>
      )}
    </div>
  );
}
