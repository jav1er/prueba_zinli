import useData from "../../hooks/useData";
import { default as NextImage } from "next/image";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import useValidatedCollection from "../../hooks/useValidatedCollection";
import { useEffect, useState } from "react";

export default function Perfil() {
  //const { formRegisterData } = useData();
  const localStorageKey = "user-logged";
  const [collection] = useLocalStorage(localStorageKey);
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log("en perfil");
    if (typeof window !== "undefined") {
      setState(collection);
    }
  }, [collection]);

  if (!state || state.length === 0) {
    return null;
  } else {
    return (
      <div className="perfil">
        <div className=" group-one">
          <NextImage
            src={`${state[0].avatar}`}
            alt="title"
            width={30}
            height={30}
            className="perfil-image"
            priority
          />
          <p>{`${state[0].username}`} </p>
        </div>

        <div className=" group-two">
          <div> {`${state[0].name}`}</div>
          <p> 220 publicaciones </p>
        </div>
      </div>
    );
  }
}
