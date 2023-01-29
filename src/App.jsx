import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoList, addTodo } from './components/feature/todo/TodoSlice.js';

function App() {
  const todoArray = useSelector(todoList)
  const dispatch = useDispatch();



  return (
    <main className="App">
      <div className='addTodo'>
        <div className='container'>
          <label htmlFor="addTodo">Add Todo:</label>
          <input type="text" />
        </div>
        <button >Add ToDo</button>
      </div>
      <div className='displayTodo'>
        <h1>the array: </h1>
        {todoArray}

      </div>
    </main>
  );
}

export default App;
