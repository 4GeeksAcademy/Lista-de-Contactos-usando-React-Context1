// src/components/ContactCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{contact.name}</h5>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">Edit</Link>
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
};