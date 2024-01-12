const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <input
          id="new-todo"
          onChange={props.handleChange}
          value={props.text}
          style={{ width: "148px" }}
        />
        <button style={{marginLeft: "4px", width: "80px"}}>
          Add item
        </button>
    </form>
  );
}

export default TodoForm;
