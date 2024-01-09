import './App.css';
import { useState } from "react";
import TodoList from './TodoList'

function App() {
  const localStorageKey = "todo_items";
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItems = items.concat({ text: text, id: Date.now(), done: false });
  
    localStorage.setItem(localStorageKey, JSON.stringify(newItems))
    setItems(newItems);
    setText('');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleCheck = (e) => {
    const newItems = [...items]
    const itemToUpdate = newItems.find((item) => item.id === parseInt(e.target.id));
    itemToUpdate.done = !itemToUpdate.done

    localStorage.setItem(localStorageKey, JSON.stringify(newItems))
    setItems(newItems);
  }

  const handleDeleteAll = () => {
    localStorage.removeItem(localStorageKey);
    setItems([]);
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
        <button onClick={handleDeleteAll}>
          Delete All
        </button>
      </footer>
    </div>
  );
}

export default App;
