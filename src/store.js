import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './components/feature/todo/TodoSlice'

export default configureStore({
    reducer:{
        todo: todoReducer,
    }
})