import "./App.css";
import TextInputs from "./components/Inputs/textInputs";
import DropDownInput from "./components/DropDown/dropDownInput";
import OthersInputs from "./components/OthersInputs/othersInputs";
import { useEffect, useState, useRef } from "react";
import SucessDialog from "./components/Dialog/sucessDialog";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [formValid, setFormValid] = useState();
  const [textFormData, setTextFormData] = useState({
    username: "",
    password: "",
    textinput: "",
  });

  const [selectorsData, setSelectorsData] = useState({
    remember: false,
    switch: false,
    selection: "",
  });

  const [dropitem, setDropItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const timerRef = useRef(null);


  useEffect(() => {
    if (formValid) {
      setDialogOpen(true);

      timerRef.current = setTimeout(() => {
        setFormValid(false);
        setTextFormData({
          username: "",
          password: "",
          textinput: "",
        });
        setSelectorsData({
          remember: false,
          switch: false,
          selection: "",
        });
        setDropItem(null);
        setDialogOpen(false);
      }, 8000); 

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          setIsOn(false)
        }
      };
    }
  }, [formValid]);

  const handleNextClick = () => {
    if (
      textFormData.username === "" ||
      textFormData.password === "" ||
      textFormData.textinput === ""
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
      console.log("Form Data:", {
        ...textFormData,
        ...selectorsData,
        dropitem,
      });
    }
  };

  const handleCancelClick = () => {
    setTextFormData({
      username: "",
      password: "",
      textinput: "",
    });
    setSelectorsData({
      remember: false,
      switch: false,
      selection: "",
    });
    setDropItem(null);
    setIsOn(false)
    
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setFormValid(false);

    setTextFormData({
      username: "",
      password: "",
      textinput: "",
    });
    setSelectorsData({
      remember: false,
      switch: false,
      selection: "",
    });
    setIsOn(false)
    setDropItem(null);
    clearTimeout(timerRef.current);
  };

  const handleChangeSlider = () => {
    setIsOn(!isOn);
    setSelectorsData({ ...selectorsData, switch: !isOn });
  };

  return (
    <form action="" className="form-div" onSubmit={(e) => e.preventDefault()}>
      <TextInputs textFormData={textFormData} setTextFormData={setTextFormData} />
      <OthersInputs
        setSelectorsData={setSelectorsData}
        selectorsData={selectorsData}
        handleChangeSlider={handleChangeSlider}
        isOn={isOn}
      />
      <DropDownInput setDropItem={setDropItem} dropitem={dropitem} />

      {dialogOpen && (
        <div className="sucessDialog" >
          <dialog open className="dialog-content" onClick={handleCloseDialog}>
            <SucessDialog />
          </dialog>
        </div>
      )}

      <div className="button">
        <input
          type="button"
          className="cancel-btn"
          onClick={handleCancelClick}
          value="Cancel"
        />
        <input
          type="submit"
          className="next-btn"
          onClick={handleNextClick}
          value="Next"
        />
      </div>
    </form>
  );
}

export default App;
