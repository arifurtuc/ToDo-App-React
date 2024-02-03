import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div>
      {/* Displaying the list of to-do items using TodoItem component */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
