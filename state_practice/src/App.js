import React, { Component } from "react";
// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let isLoggedIn;
    if (this.state.isLoggedIn) {
      isLoggedIn = "in";
    } else {
      isLoggedIn = "out";
    }
    return (
      <div>
        <h1>Hey you are currently logged {isLoggedIn}</h1>
      </div>
    );
  }
}

export default App;

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

// This is for state practice 1
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "helloworld",
//       age: "19,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     );
//   }
// }
