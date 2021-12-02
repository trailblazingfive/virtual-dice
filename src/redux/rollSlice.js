import { createSlice } from '@reduxjs/toolkit';

export const rollSlice = createSlice({
  name: 'roll',
  initialState: {
    rolls: [],
  },
  reducers: {
    addRoll: (state, action) => {
      state.rolls.push(action.payload)
    }
  }
})

export const {addRoll} = rollSlice.actions

export default rollSlice.reducer