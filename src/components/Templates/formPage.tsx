import React from "react";
import { useForm } from "react-hook-form";
import TextInputs from "../molecules/Inputs/textInputs";
import OthersInputs from "../molecules/OthersInputs/othersInputs";
import DropDownInput from "../molecules/DropDown/dropDownInput";


const FormPage = () => {

  return (
    <form onSubmit={() => {}}>
      <TextInputs/>
      <OthersInputs/>
      <DropDownInput setDropItem={''} dropitem={''}/>
    </form>
  );
};

export default FormPage;
