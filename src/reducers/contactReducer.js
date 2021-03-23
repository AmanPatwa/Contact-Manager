import { ADD_CONTACTS, DELETE_CONTACT, GET_CONTACT, GET_CONTACTS, UPDATE_CONTACT } from "../actions/types";

const initialState = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
      }
    ],
    contact: ''
  };

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state
            };
        case GET_CONTACT:
          return{
            ...state,
            contact:state.contacts.filter(contact1 => {
              return contact1.id == action.payload
            })[0]
          }
        case ADD_CONTACTS:
            return {
                ...state,
                contacts:[action.payload,...state.contacts]
            };
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(contact => {
                    return contact.id !== action.payload
                })
            };
        case UPDATE_CONTACT:
          console.log("Inside");
          return{
            ...state,
            contacts: state.contacts.map(contact1 => action.payload.id == contact1.id? action.payload : contact1 )
          };
        default:
            return state;
    }
}

