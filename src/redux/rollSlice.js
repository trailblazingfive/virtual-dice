import { createSlice } from '@reduxjs/toolkit';

export const rollSlice = createSlice({
  name: 'roll',
  initialState: {
    rolls: [],
    rollCounter: 1,
  },
  reducers: {
    addRoll: (state, action) => {
      state.rolls = [...state.rolls, action.payload]
    },
    advanceRoll: (state) => {
      state.rollCounter += 1;
    }
    
  }
})

export const {addRoll, advanceRoll} = rollSlice.actions

export default rollSlice.reducer