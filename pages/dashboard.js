import Post from "../components/Post/Post";
import SearchBar from "../components/SearchBar/SearchBar";
import Perfil from "../components/Perfil/Perfil";
import Image from "next/image";

export default function dashboard() {
  return (
    <div className="dashboardPage">
      <SearchBar />
      <div className="containerDash">
        <div className="firstCln">
          <div className="formulario"> Formulario </div>
          <Post />
        </div>
        <div className="secundCln">
          <Perfil />
        </div>
      </div>
    </div>
  );
}
