import "../styles/globals.scss";

import { useMemo, useState, useEffect } from "react"
import { GlobalData } from "../context/GlobalData"

export default function App({ Component, pageProps }) {
  const [formOneData, setFormOneData] = useState("");

  const formsData = useMemo(
    (_) => ({
      formOneData,
    }),
    [formOneData]
  );

  return (
    <GlobalData.Provider value={formsData}>
      <Component {...pageProps} />
    </GlobalData.Provider>
  );
}
