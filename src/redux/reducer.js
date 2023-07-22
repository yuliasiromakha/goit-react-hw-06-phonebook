import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      console.log('added contact');
      state.contacts.push(action.payload);
      // state.contacts = action.payload;
    },
    deleteContact: (state, action) => {
      console.log('deleted contact');
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
        console.log('this is setfilter');
      state.filter = action.payload;
    },
  },
});

export const { addContact, setFilter, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;