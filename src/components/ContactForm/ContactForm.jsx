import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addNewContact } from "redux/actions";
import PhonebookTitle from "../PhonebookTitle/PhonebookTitle";
import { nanoid } from "nanoid";
import AddContactButton from "components/AddContactButton/AddContactButton";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addNewContact(contact));
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <PhonebookTitle
          title="Number"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />

        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
        />

        <AddContactButton styles={{ marginLeft: 30 }} />
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;