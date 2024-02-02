import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  // State variable to track the content of the to-do input field
  const [todo, setTodo] = useState("");
  // State variable to store the list of to-do items
  const [todos, setTodos] = useState([]);

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      {/* Form for adding to-do items */}
      <form onSubmit={handleSubmit}>
        {/* Input field with an onChange handler to update 'todo' state */}
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        {/* Button for submitting the to-do item */}
        <button type="submit">Add</button>
      </form>

      {/* Displaying the list of to-do items using TodoItem component */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
