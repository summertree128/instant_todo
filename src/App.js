import './App.css';
import { useState } from "react";
import TodoList from './TodoList'

function App() {
  const localStorageKey = "todo_items";
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [text, setText] = useState('');

  const saveItems = (newItems) => {
    localStorage.setItem(localStorageKey, JSON.stringify(newItems))
    setItems(newItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItems = items.concat({ text: text, id: Date.now(), done: false });
  
    saveItems(newItems);
    setText('');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleCheck = (e) => {
    const newItems = [...items]
    const itemToUpdate = newItems.find((item) => item.id === parseInt(e.target.id));
    itemToUpdate.done = !itemToUpdate.done
    saveItems(newItems);
  }

  const handleRemoveCompleted = () => {
    const newItems = items.filter(item => item.done === false);
    saveItems(newItems);
  }


  return (
    <div className="App todo-app">
      <header className="App-header">
        <h1>Instant To Do (α)</h1>
      </header>
      <div>
        <TodoList
          items={items}
          setItems={setItems}
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCheck={handleCheck}
        />
      </div>
      <footer>
        <button onClick={handleRemoveCompleted} style={{ width: "240px", marginTop: "16px"}}>
          Remove completed items
        </button>
      </footer>
    </div>
  );
}

export default App;
