import React from "react";

export interface IInputsProps {
  textDivId: string | "";
  labelFor: string | "";
  labelValue: string | "";
  inputType: string | "";
  placeholder: string | "";
  inputName: string | "";
  inputId: string | "";
  inputValue: string | "";
  onchangeFun: () => void;
}

export default function Inputs (props: IInputsProps) {
  return (
    <div id={props.textDivId}>
      <label htmlFor={props?.labelFor} style={{color: "#666666", fontFamily: 'Noto Sans, sans-serif'}}>{props?.labelValue}</label>
      <input
        name={props?.inputName}
        id={props?.inputId}
        type={props?.inputType}
        placeholder={props?.placeholder}
        value={props?.inputValue}
        onChange={props?.onchangeFun}
      />
    </div>
  );
};

 Inputs;
