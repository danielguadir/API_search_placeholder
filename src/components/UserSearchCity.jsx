import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSearchCity() {
    const [userCity, setUserCity] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
     if (userCity.trim() === "") {
      setError("Por favor, ingresa una ciudad correcta de usuario.");
      return;
  }
  setError(null);
  navigate ( `/userbycity/${encodeURIComponent(userCity)}`);


};
    return (
        <div className="input-container2">
        <select
            className="user-input"
            
            placeholder="Ingrese la ciudad del usuario"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
        >
            <option value="">Seleccione una ciudad</option>
            <option value="Gwenborough">Gwenborough</option>
            <option value="Wisokyburgh">Wisokyburgh</option>
            <option value="McKenziehaven">McKenziehaven</option>
            <option value="South Elvis">South Elvis</option>
            <option value="Roscoeview">Roscoeview</option>
        </select>
        
        <button onClick={handleSearch} aria-label="Buscar por ciudad" className="btn-lupa">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-lupa"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </button>
        {error && <p className="error-message">{error}</p>}
        </div>
    );
    }
export default UserSearchCity;