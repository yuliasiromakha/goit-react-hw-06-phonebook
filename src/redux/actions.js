export const addNewContact = ({name, phone, id}) => {
    return {
        type:'ADD_CONTACT',
        payload: {
            id,
            name, 
            phone
        }
    };
}

// export const deleteContact = ({name, phone, id}) => {
//     return {
//         type:'DELETE_CONTACT',
//         payload: {
//             id,
//             name, 
//             phone
//         }
//     };
// }

export const deleteContact = (id) => {
    return {
      type: "DELETE_CONTACT",
      payload: { id },
    };
  };
  

export const setFilter = (filterValue) => {
    return {
      type: "SET_FILTER",
      payload: filterValue,
    };
  };
  