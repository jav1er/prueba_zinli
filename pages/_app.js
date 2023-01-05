import "../styles/globals.scss";

import { useMemo, useState, useEffect } from "react";
import { GlobalData } from "../context/GlobalData";

export default function App({ Component, pageProps }) {
  const [formLoginData, setFormLoginData] = useState("");
  const [formRegisterData, setFormRegisterData] = useState("");
  const [formPostData, setformPostData] = useState("");

  const formsData = useMemo(
    (_) => ({
      formLoginData,
      setFormLoginData,
      formRegisterData,
      setFormRegisterData,
      formPostData,
      setformPostData,
    }),
    [formLoginData, formRegisterData, formPostData]
  );

  return (
    <GlobalData.Provider value={formsData}>
      <Component {...pageProps} />
    </GlobalData.Provider>
  );
}
