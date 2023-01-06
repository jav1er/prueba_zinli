import { createContext } from "react";

export const GlobalData = createContext({
  formLoginData: null,
  setFormLoginData: () => null,
  formRegisterData: null,
  setFormRegisterData: () => null,
  formPostData: null,
  setformPostData: () => null,
  reloadUser: null,
  setReloadUser: () => null,
});
