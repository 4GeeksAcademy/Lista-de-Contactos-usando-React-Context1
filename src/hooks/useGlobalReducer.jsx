// src/hooks/useGlobalReducer.jsx
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  // Cargar los contactos al iniciar la aplicación
  useEffect(() => {
    fetchContacts();
  }, []);

  // Función para obtener los contactos desde la API
  const fetchContacts = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/contact/docs');
      if (!response.ok) throw new Error("Error fetching contacts");
      const data = await response.json();
      dispatch({ type: 'SET_CONTACTS', payload: data });
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Función para agregar un contacto
  const addContact = async (contact) => {
    try {
      const response = await fetch('https://playground.4geeks.com/contact/docs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) throw new Error("Error adding contact");
      const newContact = await response.json();
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Función para actualizar un contacto
  const updateContact = async (contact) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/docs/${contact.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) throw new Error("Error updating contact");
      const updatedContact = await response.json();
      dispatch({ type: 'UPDATE_CONTACT', payload: updatedContact });
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Función para eliminar un contacto
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/docs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error("Error deleting contact");
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <StoreContext.Provider value={{ store, dispatch, addContact, updateContact, deleteContact }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  const { store, dispatch, addContact, updateContact, deleteContact } = useContext(StoreContext);
  return { store, dispatch, addContact, updateContact, deleteContact };
}