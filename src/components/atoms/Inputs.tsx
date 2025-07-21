import React, { InputHTMLAttributes } from "react";

export interface IInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  textDivId: string | "";
  labelFor: string | "";
  labelValue: string | "";
  inputType: string | "";
  placeholder: string | "";
  inputId: string | "";
  register?: any;
  checked?: boolean;
  error: string | "";
}

export default function Inputs({
  textDivId,
  labelFor,
  labelValue,
  inputType,
  placeholder,
  inputId,
  register,
  checked,
  error,
  ...rest
}: IInputsProps) {

  return (
    <div id={textDivId}>
      <label
        htmlFor={labelFor}
        style={{ color: "#666666", fontFamily: "Noto Sans, sans-serif" }}
      >
        {labelValue}
      </label>
      <input
        type={inputType}
        {...register}
        {...rest}
        checked={checked}
        id={inputId}
        placeholder={placeholder}
      />
      {error && (
        <span style={{ color: "red", fontSize: "0.7rem" }}>
          {error}
        </span>
      )}
    </div>
  );
}
