import { createSlice } from '@reduxjs/toolkit'

export const contactFormSlice = createSlice ({
  name: 'contactStates',
  initialState: {
      formCompleted: false,
      isVisible: false
    },
  reducers: {
    editFormCompleted: state => {
        state.formCompleted = !state.formCompleted
    },
    editIsVisible: state => {
        state.isVisible = !state.isVisible
    }
  },
})

export default contactFormSlice.reducer;

export const { editFormCompleted, editIsVisible } = contactFormSlice.actions