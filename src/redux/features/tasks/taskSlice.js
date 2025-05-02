import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
  userTasks:[]
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state?.tasks?.length === 0) {
        state?.tasks?.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastTask = state.tasks.at(-1);
        state?.tasks?.push({
          id: lastTask?.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, {payload}) => {
      state.tasks=state?.tasks?.filter((task) => task?.id !== payload);
    },
    updateStatus: (state, {payload}) => {   
      const target = state?.tasks?.find((task) => task?.id == payload.id);
      target.status=payload.status
    },
    userTasks:(state,{payload})=>{
      const tasks=state.tasks.filter((task)=>task.assignedTo===payload)
      state.userTasks= tasks
    }
  },
});
export const { addTask, removeTask, updateStatus,userTasks} = tasksSlice.actions;
export default tasksSlice.reducer;
