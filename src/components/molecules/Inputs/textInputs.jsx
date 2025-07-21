/* eslint-disable react/prop-types */
import Inputs from "../../atoms/Inputs";
import "./textInputs.css";

function TextInputs({ register, errors }) {
  return (
    <div className="input-text-div">
      <Inputs
        textDivId={"divId"}
        labelFor={"username"}
        labelValue={"Username"}
        inputType={"text"}
        placeholder={"Enter username"}
        inputId={"username"}
        register={register("username")}
        error={errors?.username?.message}
      />
      <Inputs
        textDivId={"divId"}
        labelFor={"password"}
        labelValue={"Password"}
        inputType={"password"}
        placeholder={"Enter password"}
        inputId={"password"}
        register={register("password")}
        error={errors?.password?.message}
      />
      <Inputs
        textDivId={"divId"}
        labelFor={"textinput"}
        labelValue={"Input Text Label"}
        inputType={"text"}
        inputId={"textinput"}
        register={register("textinput")}
      />
    </div>
  );
}

export default TextInputs;
