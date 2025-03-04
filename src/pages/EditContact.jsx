// pages/EditContact.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { AddContact } from './AddContact';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const EditContact = () => {
  const { id } = useParams();
  const { store } = useGlobalReducer();
  const contact = store.contacts.find((contact) => contact.id === parseInt(id));

  return <AddContact contact={contact} />;
};