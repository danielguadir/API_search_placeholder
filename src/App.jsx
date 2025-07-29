// src/App.jsx
import {  Routes, Route } from "react-router-dom";

// Importa las vistas principales
import HomeIntro from "./components/HomeIntro";
import UsersList from "./features/users//UsersList";
import UserDetail from "./features/users/UserDetail";
import UserByName from "./components/UserByName"; // Asegúrate de que este componente exista
import UserByCity from "./components/UserByCity"; // Asegúrate de que este componente exista

function App() {
  return (
    <Routes>
      {/* Ruta principal (intro o página de inicio) */}
      <Route path="/" element={<HomeIntro />} />

      {/* Ruta para ver todos los usuarios */}
      <Route path="/usuarios" element={<UsersList />} />

      {/* Ruta para ver detalles de un usuario específico */}
      <Route path="/usuarios/:id" element={<UserDetail />} />

      {/* Ruta para buscar un usuario por nombre */}
      <Route path="/userbyname/:name" element={<UserByName />} />

      {/* Ruta para buscar un usuario por ciudad */}
      <Route path="/userbycity/:city" element={<UserByCity />} />
    </Routes>
  );
}

export default App;
