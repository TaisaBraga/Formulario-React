import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useRef,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface ISetProps {}

export const UseSetContext = createContext<ISetProps>(
  {} as unknown as ISetProps
);

export const useSetContext = () => useContext<ISetProps>(UseSetContext);

export const SetContextProvider = ({ children }: React.PropsWithChildren) => {
  // const [isOn, setIsOn] = useState(false);
  // const [formValid, setFormValid] = useState();
  // const [textFormData, setTextFormData] = useState({
  //   username: "",
  //   password: "",
  //   textinput: "",
  // });

  // const [selectorsData, setSelectorsData] = useState({
  //   remember: false,
  //   switch: false,
  //   selection: "",
  // });

  // const [dropitem, setDropItem] = useState(null);
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const timerRef = useRef(null);

  // useEffect(() => {
  //   if (formValid) {
  //     setDialogOpen(true);

  //     timerRef.current = setTimeout(() => {
  //       setFormValid(false);
  //       setTextFormData({
  //         username: "",
  //         password: "",
  //         textinput: "",
  //       });
  //       setSelectorsData({
  //         remember: false,
  //         switch: false,
  //         selection: "",
  //       });
  //       setDropItem(null);
  //       setDialogOpen(false);
  //     }, 8000);

  //     return () => {
  //       if (timerRef.current) {
  //         clearTimeout(timerRef.current);
  //         setIsOn(false);
  //       }
  //     };
  //   }
  // }, [formValid]);

  // const handleNextClick = () => {
  //   if (
  //     textFormData.username === "" ||
  //     textFormData.password === "" ||
  //     textFormData.textinput === ""
  //   ) {
  //     setFormValid(false);
  //   } else {
  //     setFormValid(true);
  //     console.log("Form Data:", {
  //       ...textFormData,
  //       ...selectorsData,
  //       dropitem,
  //     });
  //   }
  // };

  // const handleCancelClick = () => {
  //   setTextFormData({
  //     username: "",
  //     password: "",
  //     textinput: "",
  //   });
  //   setSelectorsData({
  //     remember: false,
  //     switch: false,
  //     selection: "",
  //   });
  //   setDropItem(null);
  //   setIsOn(false);
  // };

  // const handleCloseDialog = () => {
  //   setDialogOpen(false);
  //   setFormValid(false);

  //   setTextFormData({
  //     username: "",
  //     password: "",
  //     textinput: "",
  //   });
  //   setSelectorsData({
  //     remember: false,
  //     switch: false,
  //     selection: "",
  //   });
  //   setIsOn(false);
  //   setDropItem(null);
  //   clearTimeout(timerRef.current);
  // };

  // const handleChangeSlider = () => {
  //   setIsOn(!isOn);
  //   setSelectorsData({ ...selectorsData, switch: !isOn });
  // };

  const [user, setUser] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [textUser, setTextUser] = useState<string | undefined>("");

  const value = useMemo(
    () => ({
      user,
      setUser,
      password,
      setPassword,
      textUser,
      setTextUser,
    }),
    [user, setUser, password, setPassword, textUser, setTextUser]
  );
};
