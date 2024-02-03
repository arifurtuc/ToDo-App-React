import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // State variable to track the content of the to-do input field
  const [todo, setTodo] = useState({ name: "", status: false });

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", status: false });
  }
  return (
    // Form for adding to-do items
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {/* Input field with an onChange handler to update 'todo' state */}
        <input
          className={styles.todoInput}
          onChange={(e) => setTodo({ name: e.target.value, status: false })}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item"
        />
        {/* Button for submitting the to-do item */}
        <button className={styles.todoButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
