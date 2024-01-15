import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import carSlice from './features/carSlice'

export type rootState = ReturnType<typeof store.getState>
 const store  = configureStore({
  reducer: {
    counter:counterReducer,
    car:carSlice,
  },
})

export default store