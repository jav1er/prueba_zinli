import useData from "../../hooks/useData";
import Image from "next/image";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import useValidatedCollection from "../../hooks/useValidatedCollection";
import { useEffect, useState } from "react";

export default function Perfil() {
  //const { formRegisterData } = useData();
  const localStorageKey = "user-logged";

  const [collection] = useLocalStorage(localStorageKey);
  const [state, setState] = useState([]);

  // const [searchValue] = useValidatedCollection(localStorageKey);

  // let toSerch = ["username", collection1[0].username];
  // const collection = searchValue(...toSerch);

  useEffect(() => {
    console.log("en perfil");

    if (typeof window !== "undefined") {
      setState(
        JSON.parse(localStorage.getItem("Digital-Tech:2023-05-14:user-logged"))
      );
    }
  }, []);

  if (!state || state.length === 0) {
    return null;
  } else {
    return (
      <div className="perfil">
        <div className=" group-one">
          <Image
            src={`${state[0].avatar}`}
            alt="title"
            width={30}
            height={30}
            className="perfil-image"
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

  // // initialRenderComplete will be false on the first render and true on all following renders
  // if (!initialRenderComplete) {
  // 	// Returning null will prevent the component from rendering, so the content will simply be missing from
  // 	// the server HTML and also wont render during the first client-side render.
  // 	return null;
  // } else {
  // 	const date = new Date();
  // 	return <time>{date}</time>;
  // }
}
