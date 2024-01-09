const TodoItem = (props) => {
  const classNameForDoneItem = props.item.done ? "done-item" : "";

  return (
    <>
      <input
        type="checkbox"
        className={"todo-item-checkbox"}
        name={`checkbox-${props.item.id}`}
        id={props.item.id}
        onChange={(e) => props.onChange(e)}
        checked={props.item.done}
      />
      <div className={classNameForDoneItem}>{props.item.text}</div>
    </>
  );
}

export default TodoItem;
