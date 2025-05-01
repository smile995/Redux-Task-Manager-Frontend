
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask:(state,{payload})=>{

    }
  },
})


export default tasksSlice.reducer