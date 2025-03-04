// src/routes.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";
import { Demo } from "./pages/Demo";  // Importa el componente Demo

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />  {/* Ruta principal */}
      <Route path="/add" element={<AddContact />} />  {/* Ruta para agregar contacto */}
      <Route path="/edit/:id" element={<EditContact />} />  {/* Ruta para editar contacto */}
      <Route path="/demo" element={<Demo />} />  {/* Ruta para Demo */}
    </Route>
  )
);