import Post from "../components/Post/Post";
import SearchBar from "../components/SearchBar/SearchBar";
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
          <div className="perfil"> cuadro perfil </div>
        </div>
      </div>
    </div>
  );
}
