import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoArray: ["make food"]
    },

    reducers: {
        addTodo: (state, action) => {
            state.todoArray.push(action.payload);
        }
    },
})

export const { addTodo } = todoSlice.actions;
export const todoList = (state) => state.todo.todoArray;
export default todoSlice.reducer;