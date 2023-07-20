// import { createSlice } from '@reduxjs/toolkit';

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: "",
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//         state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);
//       },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//     setContacts: (state, action) => {
//       state.contacts = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter, setContacts } = contactSlice.actions;
// export default contactSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

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
    },
    deleteContact: (state, action) => {
        console.log('deleted contact');
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id)
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, setFilter, deleteContact, setContacts } = contactSlice.actions;

export default contactSlice.reducer;
