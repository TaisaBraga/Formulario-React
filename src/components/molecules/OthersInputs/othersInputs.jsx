/* eslint-disable react/prop-types */
import Inputs from "../../atoms/Inputs";
import "./othersInputs.css";

export default function OthersInputs({ register, watch }) {
  const isChecked = watch("switch")
  const radioSelection = watch("radioSelection", "")

  return (
    <div id="othesInput-div">
      <Inputs
        textDivId={"input-checkbox-div"}
        labelFor={"remember"}
        labelValue={"Remember Me"}
        inputId={"remember"}
        inputType={"checkbox"}
        register={register("remember")}

      />
      <Inputs
        textDivId={"switch-div"}
        labelFor={"switch"}
        labelValue={isChecked ? "On" : "Off"}
        inputId={"slider"}
        inputType={"checkbox"}
        register={register("switch")}
      />
      <Inputs
        textDivId={"input-radio-div"}
        labelFor={"radio1"}
        labelValue={"Radio Selection 1"}
        inputId={"radio1"}
        inputType={"radio"}
        register={register("radioSelection")}
        checked={radioSelection === "radio1"}

      />
      <Inputs
        textDivId={"input-radio-div"}
        labelFor={"radio2"}
        labelValue={"Radio Selection 2"}
        inputId={"radio2"}
        inputType={"radio"}
        register={register("radioSelection")}
        checked={radioSelection === "radio2"}

      />
      <Inputs
        textDivId={"input-radio-div"}
        labelFor={"radio3"}
        labelValue={"Radio Selection 3"}
        inputId={"radio3"}
        inputType={"radio"}
        register={register("radioSelection")}
        checked={radioSelection === "radio3"}
      />
    </div>
  );
}
