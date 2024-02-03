import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  // Sort todos based on completion status (incomplete items first)
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.status) - Number(b.status));
  return (
    <div className={styles.list}>
      {/* Displaying the list of to-do items using TodoItem component */}
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
