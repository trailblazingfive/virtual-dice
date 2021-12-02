import { configureStore } from '@reduxjs/toolkit'
import rollReducer from '../redux/rollSlice'

export default configureStore({
  reducer: {
    roll: rollReducer,
  },
})