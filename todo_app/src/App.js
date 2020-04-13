// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

//todo phase 3
/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/
import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
const App = () => {
  const todoInfo = todosData.map((todo) => (
    <TodoItem key={todo.id} item={todo} />
  ));
  return <div className="todo-list">{todoInfo}</div>;
};
export default App;
