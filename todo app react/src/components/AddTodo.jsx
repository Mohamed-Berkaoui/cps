function AddTodo({ setTodos, todos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { status: "pending", id: Math.floor(Math.random() * 1000),task:e.target.task.value },
    ]);
  }
  return (
    <div className="add">
      <h1>add new todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
