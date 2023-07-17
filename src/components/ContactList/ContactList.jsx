import React from "react";
import PropTypes from "prop-types";

// import PhonebookTitle from "../PhonebookTitle/PhonebookTitle";

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteClick = (id) => {
    onDeleteContact(id);
  };

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "space-between" }}>
      {contacts && contacts.map(contact => (
        <li key={contact.id} style={{ fontSize: 16 }}>
          {contact.name}: {contact.number}
          <button style={{ marginLeft: 30 }} onClick={() => handleDeleteClick(contact.id)}>Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string
    })
  ).isRequired,
  onDeleteContact: PropTypes.func
};

export default ContactList;
