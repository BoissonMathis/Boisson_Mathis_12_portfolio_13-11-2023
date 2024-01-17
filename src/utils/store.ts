import { configureStore } from '@reduxjs/toolkit'
import contactFormReducer from '../components/Contactform/contactformSlice.js'
import introductionReducer from '../components/Introduction/introductionSlice.js';

export const store = configureStore({
  reducer: {
    contactStates: contactFormReducer,
    introductionStates: introductionReducer
  }
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
