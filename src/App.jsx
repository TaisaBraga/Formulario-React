import "./App.css";
import TextInputs from "./components/Inputs/textInputs";
import DropDownInput from "./components/DropDown/dropDownInput";
import OthersInputs from "./components/OthersInputs/othersInputs";
import { useEffect, useState } from "react";
import SucessDialog from "./components/Dialog/sucessDialog";

function App() {
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
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (formValid) {
      setDialogOpen(true); 
      
      const timer = setTimeout(() => {
        setDialogOpen(false); 
        setFormValid(false)

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
        setErrors({})

      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [formValid]);

  const handleNextClick = () => {
    const newErrors = {};

    if (textFormData.username === "") {
      newErrors.username = "* Username is required";
    }
    if (textFormData.password === "") {
      newErrors.password = "* Password is required";
    }
    if (textFormData.textinput === "") {
      newErrors.textinput = "* Text Input is required";
    }

    if (
      textFormData.username === "" ||
      textFormData.password === "" ||
      textFormData.textinput === ""
    ) {
      setErrors(newErrors)
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
    setErrors({})
  };

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setFormValid(false)

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
    setErrors({})
  }

  return (
    <>
      <div className="form-div">
        <TextInputs
          setTextFormData={setTextFormData}
          textFormData={textFormData}
          errors={errors}
          setErrors={setErrors}
        />
        <OthersInputs
          setSelectorsData={setSelectorsData}
          selectorsData={selectorsData}
        />
        <DropDownInput setDropItem={setDropItem} dropitem={dropitem} />

        {dialogOpen && (
          <div className="sucessDialog" onClick={handleCloseDialog}>
            <dialog open className="dialog-content">
              <SucessDialog />
            </dialog>
          </div>
        )}

        <div className="button">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => handleCancelClick()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="next-btn"
            onClick={() => handleNextClick()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
