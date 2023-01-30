import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoList, addTodo } from './components/feature/todo/TodoSlice.js';
import Todo from './components/Todo';

function App() {
  const todoArray = useSelector(todoList)
  const dispatch = useDispatch();

  let inputText = "";

  const buttonHandler = () => {
    dispatch(addTodo(inputText));
  }

  const changeHandler = (e) => {
    inputText = e.target.value;
  }

  return (
    <main className="App">
      <div className='addTodo'>
        <div className='container'>
          <label htmlFor="addTodo">Add Todo:</label>
          <input type="text" onChange={(e) => changeHandler(e)}></input>
        </div>
        <button onClick={buttonHandler}>Add ToDo</button>
      </div>
      <div className='displayTodo'>
        <h1>the array: </h1>
        <Todo />
        {todoArray}

      </div>
    </main>
  );
}

export default App;
