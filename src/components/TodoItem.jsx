import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  // Function to handle the deletion of a to-do item
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
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
