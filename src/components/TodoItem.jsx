import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  // Function to handle the deletion of a to-do item
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  // Function to handle the toggling of the completion status of a to-do item.
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  // CSS class to apply for completed to-do items
  const completedClassName = item.status ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {/* Clickable span to toggle completion status */}
        <span
          className={completedClassName}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>
        {/* Delete button to remove todos */}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      {/* Horizontal line for visual separation */}
      <hr className={styles.line} />
    </div>
  );
}
