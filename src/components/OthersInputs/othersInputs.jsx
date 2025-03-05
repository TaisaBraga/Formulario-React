/* eslint-disable react/prop-types */
import "./othersInputs.css";
import { useCallback, useState } from "react";

// eslint-disable-next-line react/prop-types
function OthersInputs({ selectorsData, setSelectorsData }) {
  const [isOn, setIsOn] = useState(false);

  const handleChangeSlider = useCallback(() => {
    setIsOn(!isOn);
    setSelectorsData({ ...selectorsData, switch: !isOn });
  }, [isOn, selectorsData, setSelectorsData]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
  
    setSelectorsData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, 
    }));
  };
  

  return (
    <>
      <div className="input-checkbox-div">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          checked={selectorsData.remember}
          onChange={handleChange}
        />
        <label htmlFor="remember">Remember Me</label>
      </div>

      <div className="switch-div">
        <label className="switch">
          <input
            type="checkbox"
            name="switch"
            id="slider"
            onClick={() => handleChangeSlider()}
            checked={selectorsData.switch}
            onChange={handleChangeSlider}
          />
          <span className="slider"></span>
        </label>
        <p>{isOn ? "On" : "Off"}</p>
      </div>

      <div className="input-radio-div">
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
      </div>
    </>
  );
}

export default OthersInputs;
