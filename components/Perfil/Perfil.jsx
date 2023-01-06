import useData from "../../hooks/useData";
import Image from "next/image";
export default function Perfil() {
  const { formRegisterData } = useData();

  return (
    <div className="perfil">
      <div className=" group-one">
        <Image
          src={formRegisterData.avatar}
          alt="title"
          width={30}
          height={30}
          className="perfil-image"
        />
        <p>{formRegisterData.username} </p>
      </div>

      <div className=" group-two">
        <div> {formRegisterData.name}</div>
        <p> 220 publicaciones </p>
      </div>
    </div>
  );
}
