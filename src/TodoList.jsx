import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="todo-app">
      <div className="todo-list">
        <ul>
          {props.items.map(item => (
            <li className="todo-item" key={item.id}>
              <TodoItem item={item} onChange={props.handleCheck} />
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={props.handleSubmit}>
        <input
          id="new-todo"
          onChange={props.handleChange}
          value={props.text}
        />
        <button style={{marginLeft: "4px"}}>
          Add item
        </button>
      </form>
    </div>
  );
}

export default TodoList;
