import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = createAction('contact/add', data => ({
//   payload: {
//     ...data,
//     id: uuidv4(),
//   },
// }));

// export const deleteContact = createAction('contact/delete');
export const filterContact = createAction('contact/filter');
