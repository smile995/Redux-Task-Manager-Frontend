import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      name: "Hamza",
      email: "hamza@gmail.com",
      userTasks: [],
    },
  ],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser:(state,{payload})=>{
     console.log(payload);
     
    }
  },
});
// export const { } = userSlice.actions;
export default userSlice.reducer;
