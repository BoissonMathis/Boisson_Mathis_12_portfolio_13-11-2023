import { createSlice } from '@reduxjs/toolkit'

export const introductionSlice = createSlice ({
  name: 'introductionStates',
  initialState: {
      started: false
    },
  reducers: {
    editStarted: state => {
        state.started = !state.started
    }
  },
})

export default introductionSlice.reducer;

export const { editStarted } = introductionSlice.actions