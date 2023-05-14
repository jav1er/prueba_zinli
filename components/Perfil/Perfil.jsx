import useData from "../../hooks/useData";
import Image from "next/image";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import useValidatedCollection from "../../hooks/useValidatedCollection";
import { useEffect } from "react";

export default function Perfil() {
  //const { formRegisterData } = useData();
  const localStorageKey = "user-logged";

  const [collection] = useLocalStorage(localStorageKey);

  // const [searchValue] = useValidatedCollection(localStorageKey);

  // let toSerch = ["username", collection1[0].username];
  // const collection = searchValue(...toSerch);

  useEffect(() => {
    console.log("en perfil");
    console.log(collection);

    // console.log("a mostrar");
    // console.log(collection);
  }, [collection]);

  if (!collection || collection.length === 0) {
    return null;
  }

  return (
    <div className="perfil">
      <div className=" group-one">
        <Image
          src={`${collection[0].avatar}`}
          alt="title"
          width={30}
          height={30}
          className="perfil-image"
        />
        <p>{`${collection[0].username}`} </p>
      </div>

      <div className=" group-two">
        <div> {`${collection[0].name}`}</div>
        <p> 220 publicaciones </p>
      </div>
    </div>
  );
}
