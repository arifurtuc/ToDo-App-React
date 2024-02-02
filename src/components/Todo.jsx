import { useState } from "react";

export default function Todo() {
  // State variable to track the content of the to-do input field
  const [todo, setTodo] = useState("");

  return (
    <div>
      {/* Form for adding to-do items */}
      <form>
        {/* Input field with an onChange handler to update 'todo' state */}
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        {/* Button for submitting the to-do item */}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
