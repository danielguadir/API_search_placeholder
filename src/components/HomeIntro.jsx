import { useNavigate } from "react-router-dom"; // src/components/HomeIntro.jsx
import "../App.css";
import "../index.css";
import UserSearchBar from "./UserSearchBar";
import UserSearchName from "./UserSearchName"; // Asegúrate de que este componente exista
import UserSearchCity from "./UserSearchCity"; // Asegúrate de que este componente exista

function HomeIntro() {
  const navigate = useNavigate();

  return (
    <div className="home-intro">
      <h1>App de usuarios</h1>
      <p>
        Esta aplicación utiliza la API pública: <br />
        <code>https://jsonplaceholder.typicode.com/users</code> <br />
        para mostrar y consultar usuarios.
      </p>

      <button onClick={() => navigate("/usuarios")}>
        Ver todos los usuarios
      </button>
      <br />
       <br />
       <div className="search-container">
      <UserSearchBar />
      <UserSearchName />
      <UserSearchCity />
      </div>
    </div>
  );
}

export default HomeIntro;
