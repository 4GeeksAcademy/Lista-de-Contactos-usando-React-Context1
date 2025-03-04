// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const { store, deleteContact } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Lista de contactos</h1>
      <div className="list-group">
        {store.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} />
        ))}
      </div>
      <Link to="/add" className="btn btn-success mt-3">
        Add Contact
      </Link>
    </div>
  );
};