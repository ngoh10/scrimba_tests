// Time to have fun styling! But first things first:

// 1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)

// 2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!

/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/
import React from "react";

// function TodoItem() {
//   return (
//     <div>
//       <input type="checkbox" />
//       <p>hella big peepee</p>

//       <input type="checkbox" />
//       <p>hella big peepee</p>

//       <input type="checkbox" />
//       <p>hella big peepee</p>

//       <input type="checkbox" />
//       <p>hella big peepee</p>
//     </div>
//   );
// }
const TodoItem = ({ item }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.completed} />
      <p>{item.text} </p>
    </div>
  );
};

export default TodoItem;
