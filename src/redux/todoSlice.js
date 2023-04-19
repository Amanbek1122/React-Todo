import { createSlice } from "@reduxjs/toolkit";

const datas = JSON.parse(localStorage.getItem("todos")) || [];
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: datas,
    isLoading: true,
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push({
        id: Date.now(),
        title: action.payload,
        status: false,
      });
    },
    deleteTodo: (state, { payload }) => {
      state.data = state.data.filter((el) => el.id !== payload);
    },
    onStatusChange: (state, { payload }) => {
      state.data = state.data.map((item) => {
        if (item.id === payload) {
          return { ...item, status: !item.status };
        }
        return item;
      });
    },
    onEditTodo: (state, { payload }) => {
      state.data = state.data.map((item) => {
        if (item.id === payload.id) {
          return { ...item, title: payload.inputValue };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, onStatusChange, onEditTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
