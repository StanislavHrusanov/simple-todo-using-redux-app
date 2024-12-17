import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addNewTask(state, action) {
      const data = action.payload;
      const newId = Math.random();
      const newTask = {
        id: newId,
        title: data.title,
        description: data.description,
        completed: false,
      };

      state.unshift(newTask);
    },
    changeStatus(state, action) {
      const id = action.payload;
      const taskToChange = state.find((task) => task.id === id);
      taskToChange.completed = !taskToChange.completed;
    },
    deleteTask(state, action) {
      const id = action.payload;
      const indexOfTaskForDeleting = state.findIndex((task) => task.id === id);
      state.splice(indexOfTaskForDeleting, 1);
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
