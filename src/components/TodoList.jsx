import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {/* Displaying the list of to-do items using TodoItem component */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
