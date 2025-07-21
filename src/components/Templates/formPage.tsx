import React from "react";
import "./formPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputs from "../molecules/Inputs/textInputs";
import OthersInputs from "../molecules/OthersInputs/othersInputs";
import DropDownInput from "../molecules/DropDown/dropDownInput";
import Buttons from "../atoms/Buttons";

const FormShema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .nonempty("Username is required"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .nonempty("Password is required"),
  textinput: z.string(),
  remember: z.boolean(),
  switch: z.boolean(),
  radioSelection: z.string(),
  dropdownSelection: z.string()
});

type FormSchemaType = z.infer<typeof FormShema>;

const FormPage = () => {
  const {
    handleSubmit,
    reset,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormShema),
    defaultValues: {
    username: "",
    password: "",
    textinput: "",
    remember: false,
    switch: false,
    radioSelection: "",
    dropdownSelection: "defaultValue"
    }
  });

  const handleFormSubmit = (data: FormSchemaType) => {
    console.log("dataForm", {data});
    window.alert("Dados gravados com sucesso!")
    reset()
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form-container">
      <TextInputs register={register} errors={errors} />
      <OthersInputs register={register} watch={watch} />
      <DropDownInput control={control} />
      <div className="button-container">
        <Buttons
          buttonType="reset"
          buttonName="Cancel"
          fontColor="#7A5CFA"
          background="#fff"
          borderStyle="1px solid #7A5CFA"
          onClick={() => reset()}
        />
        <Buttons
          buttonType="submit"
          buttonName="Next"
          fontColor="#fff"
          background="#7A5CFA"
          borderStyle="1px solid #7A5CFA"
        />
      </div>
    </form>
  );
};

export default FormPage;
