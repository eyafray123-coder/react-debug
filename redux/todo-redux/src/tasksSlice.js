import { createSlice, nanoid } from "@reduxjs/toolkit";

// Chaque tâche : { id, description, isDone }
const initialState = {
  items: [
    { id: nanoid(), description: "Apprendre Redux", isDone: false },
    { id: nanoid(), description: "Créer l'application ToDo", isDone: false },
  ],
  filter: "all", // "all" | "done" | "notDone"
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: nanoid(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) task.description = description;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;