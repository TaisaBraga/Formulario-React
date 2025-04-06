/* eslint-disable react/prop-types */
import Inputs from "../../atoms/Inputs";
import "./textInputs.css";

function TextInputs() {
  return (
    <div className="input-text-div">
      <Inputs
        textDivId={"divId"}
        labelFor={"username"}
        labelValue={"Username"}
        inputType={"text"}
        inputName={"username"}
        placeholder={"Enter username"}
        inputId={"username"}
        inputValue={""}
        onchangeFun={() => {}}
      />
      <Inputs
        textDivId={"divId"}
        labelFor={"password"}
        labelValue={"Password"}
        inputType={"password"}
        inputName={"password"}
        placeholder={"Enter password"}
        inputId={"password"}
        inputValue={""}
        onchangeFun={() => {}}
      />
      <Inputs
        textDivId={"divId"}
        labelFor={"textinput"}
        labelValue={"Input Text Label"}
        inputType={"text"}
        inputName={"textinput"}
        inputId={"textinput"}
        inputValue={""}
        onchangeFun={() => {}}
      />
    </div>
  );
}

export default TextInputs;
