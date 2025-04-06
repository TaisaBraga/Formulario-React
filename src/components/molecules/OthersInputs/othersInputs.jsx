/* eslint-disable react/prop-types */
import Inputs from "../../atoms/Inputs";
import "./othersInputs.css";

// eslint-disable-next-line react/prop-types
export default function OthersInputs() {
  return (
    <div id="othesInput-div">
      <Inputs
        textDivId={"input-checkbox-div"}
        labelFor={"remember"}
        labelValue={"Remember Me"}
        inputName={"remember"}
        inputId={"remember"}
        inputType={"checkbox"}
        inputValue={""}
        onchangeFun={() => {}}
      />
      <Inputs
        textDivId={"switch-div"}
        labelFor={"switch"}
        labelValue={"On"}
        inputName={"switch"}
        inputId={"slider"}
        inputType={"checkbox"}
        inputValue={""}
        onchangeFun={() => {}}
      />
      <Inputs
        textDivId={"input-radio-div"}
        labelFor={"radio1"}
        labelValue={"Radio Selection 1"}
        inputName={"selection"}
        inputId={"radio1"}
        inputType={"radio"}
        inputValue={"Radio Selection 1"}
        onchangeFun={() => {}}
      />
      <Inputs
        textDivId={"input-radio-div"}
        labelFor={"radio2"}
        labelValue={"Radio Selection 2"}
        inputName={"selection"}
        inputId={"radio2"}
        inputType={"radio"}
        inputValue={"Radio Selection 2"}
        onchangeFun={() => {}}
      />
      <Inputs
        textDivId={"input-radio-div"}
        labelFor={"radio3"}
        labelValue={"Radio Selection 3"}
        inputName={"selection"}
        inputId={"radio3"}
        inputType={"radio"}
        inputValue={"Radio Selection 3"}
        onchangeFun={() => {}}
      />
      {/* <div className="input-checkbox-div">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          checked={selectorsData.remember}
          onChange={handleChange}
        />
        <label htmlFor="remember">Remember Me</label>
      </div> */}

      {/* <div className="switch-div">
        <label className="switch">
          <input
            type="checkbox"
            name="switch"
            id="slider"
            checked={selectorsData.switch}
            onChange={handleChangeSlider}
          />
          <span className="slider"></span>
        </label>
        <p>{isOn ? "On" : "Off"}</p>
      </div> */}

      {/* <div className="input-radio-div">
        <div>
          <input
            type="radio"
            name="selection"
            id="radio1"
            value="Radio Selection 1"
            checked={selectorsData.selection === "Radio Selection 1"}
            onChange={handleChange}
          />
          <label htmlFor="radio1">Radio Selection 1</label>
        </div>
        <div>
          <input
            type="radio"
            name="selection"
            id="radio2"
            value="Radio Selection 2"
            checked={selectorsData.selection === "Radio Selection 2"}
            onChange={handleChange}
          />
          <label htmlFor="radio2">Radio Selection 2</label>
        </div>
        <div>
          <input
            type="radio"
            name="selection"
            id="radio3"
            value="Radio Selection 3"
            checked={selectorsData.selection === "Radio Selection 3"}
            onChange={handleChange}
          />
          <label htmlFor="radio3">Radio Selection 3</label>
        </div>
      </div> */}
    </div>
  );
}
