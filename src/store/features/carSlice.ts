import { createSlice } from '@reduxjs/toolkit'

export const carSlice = createSlice({
  name: 'car',
  initialState: [{name:'姓名0'}] as any[],
  reducers: {
    add: (state,value) => {
      state.push(value.payload)
    },
    remove: (state) => {
      state.shift()
    },
  },
})

export const { add, remove } = carSlice.actions

export default carSlice.reducer