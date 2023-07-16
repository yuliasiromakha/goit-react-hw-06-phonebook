export const addContact = ({name, phone, id}) => {
    return {
        type:'ADD_CONTACT',
        payload: {
            id,
            name, 
            phone
        }
    };
}

export const deleteContact = ({name, phone}) => {
    return {
        type:'DELETE_CONTACT',
        payload: {
            name, 
            phone
        }
    };
}