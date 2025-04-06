/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./dropDownInput.css";

function DropDownInput({setDropItem, dropitem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const dropdownRef = useRef(null);

  const dropDownOptions = [
    "Dropdown option",
    "Dropdown option 1",
    "Dropdown option 2",
  ];

  useEffect(() => {
    if(dropitem == null){
      setSelectedItem("")
    }
  }, [dropitem])
  
  const handleClickOpen = () => {
    if (isOpen == true) {
      setIsOpen(false);
      dropdownRef.current ? dropdownRef.current.classList.remove("show") : null;
    } else {
      setIsOpen(true);
      dropdownRef.current ? dropdownRef.current.classList.toggle("show") : null;
    }
  };

  const handleSelectItem = (text) => {
    setIsOpen(false);
    dropdownRef.current?.classList.remove("show");
    setSelectedItem(text);
    setDropItem(text); 
  };;

  return (
    <div className="dropdown-input">
      <label className="dropdown-label" style={{color: "#666666", fontFamily: 'Noto Sans, sans-serif'}}>Dropdown Title</label>
      <div className="dropdown">
        <div className="dropdown-selected" onClick={handleClickOpen} style={{color: "#666666", fontFamily: 'Noto Sans, sans-serif'}}>
          {selectedItem ? selectedItem : "Dropdown option"}
        </div>
        <ul
          className="dropdown-list"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {dropDownOptions.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelectItem(item)}
              style={{color: "#666666", fontFamily: 'Noto Sans, sans-serif'}}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDownInput;
