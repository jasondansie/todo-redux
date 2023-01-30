import React from 'react';
import classes from './Todo.module.css'

const Todo = ({ todoText }) => {
    return (
        <div className={classes.todo}>
            <h2>{todoText}</h2>
        </div>
    );
};

export default Todo;