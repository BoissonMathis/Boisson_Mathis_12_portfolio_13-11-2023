import { configureStore } from '@reduxjs/toolkit'
import contactFormReducer from '../components/Contactform/contactformSlice.js'

export default configureStore({
  reducer: {
    contactStates: contactFormReducer,
  }
});