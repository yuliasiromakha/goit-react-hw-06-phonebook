import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";

import { addNewContact, deleteContact } from "../redux/actions";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './general.css'

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  
  const [filter, setFilter] = useState('');

  const handleAddContact = (contact) => {
    const isDuplicate = contacts.some(
      (existingContact) => existingContact.name === contact.name
    );
    if (isDuplicate) {
      return alert("Contact already exists!");
    } 
    
    dispatch(addNewContact({ name: contact.name, phone: contact.phone, id: contact.id }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue.toLowerCase());
  };

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storedContacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className="general__positioning">
      <div className="border__style">
        <PhonebookTitle
          title="Name"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />
        <ContactForm id='1' onAddContact={handleAddContact} />
      </div>

      <PhonebookTitle
        title="Contacts"
        styles={{
          fontSize: 25,
          marginBottom: 0,
        }}
      />

      <FilterContact
        filter={filter}
        onFilterChange={handleFilterChange}
      />

      <ContactList contacts={filteredContacts}  onDeleteContact={handleDeleteContact}/>
    </div>
  );
}

export default App;