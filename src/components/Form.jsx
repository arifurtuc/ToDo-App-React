import { useState } from "react";

export default function Form({ todos, setTodos }) {
  // State variable to track the content of the to-do input field
  const [todo, setTodo] = useState("");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    // Form for adding to-do items
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
  );
}
