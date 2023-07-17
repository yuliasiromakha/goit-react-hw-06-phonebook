const initialState = {
    contacts: [],
    filter: ""
  }
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        console.log('added contact')
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
  
      case "DELETE_CONTACT":
        console.log('contact deleted')
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload.id),
        };
  
      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default contactReducer;
  