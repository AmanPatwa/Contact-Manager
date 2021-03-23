import { GET_CONTACT, GET_CONTACTS, UPDATE_CONTACT } from "./types";
import { ADD_CONTACTS } from "./types";
import { DELETE_CONTACT } from "./types";

export const getContacts = () => {
    return{
        type: GET_CONTACTS
    }
}

export const deleteContacts = (id) => {
    return{
        type: DELETE_CONTACT,
        payload: id
    }
}

export const addContact = (contact) => {
    return{
        type: ADD_CONTACTS,
        payload: contact
    }
}

export const updateContact = (contact) => {
    console.log('contact',contact);
    return{
        type: UPDATE_CONTACT,
        payload: contact
    }
}

export const getContact = (id) => {
    return{
        type: GET_CONTACT,
        payload: id
    }
}