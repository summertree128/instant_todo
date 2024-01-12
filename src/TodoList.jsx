import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      <div className="todo-list">
        <ul>
          {props.items.map(item => (
            <li className="todo-item" key={item.id}>
              <TodoItem item={item} onChange={props.handleCheck} />
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

export default TodoList;
