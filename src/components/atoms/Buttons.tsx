import React from "react";

export interface IButtonProps {
  buttonType: "submit" | "reset" | "button";
  onClick?: () => void;
  buttonName: string | "";
  fontColor: string | "";
  background: string | "";
  borderStyle: string | "";
}

export default function Buttons(props: IButtonProps) {
  return (
    <>
      <button
        type={props?.buttonType}
        onClick={props?.onClick}
        style={{
          cursor: "pointer",
          padding: "1em",
          border: props.borderStyle,
          borderRadius: "8px",
          height: "3.5em",
          width: "8em",
          fontFamily: "Noto Sans, sans-serif",
          color: props.fontColor,
          backgroundColor: props.background,
        }}
      >
        {props?.buttonName}
      </button>
    </>
  );
}
