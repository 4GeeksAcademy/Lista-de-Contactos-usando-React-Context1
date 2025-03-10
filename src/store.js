// src/store.js
export const initialStore = () => {
  return {
    contacts: [],  // Lista de contactos
    message: null,  // Mensajes de error o éxito
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return {
        ...store,
        contacts: action.payload,
      };
    case 'ADD_CONTACT':
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };
    case 'UPDATE_CONTACT':
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...store,
        contacts: store.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      throw Error('Unknown action.');
  }
}