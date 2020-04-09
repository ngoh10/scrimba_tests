// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

import React from "react";
import TodoItem from "./components/TodoItem";
const App = () => {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};
export default App;
