import React from "react";
import Jokes from "./components/Jokes";
import jokesData from "./components/jokesData";
// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
// App should be in its own file
// App should render 5 <Joke /> components
// Each Joke should receive a "question" prop and a "punchLine" prop
// and render those however you'd like

// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
// E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?
// Spend time practicing the style of your Joke component

const App = () => {
  const jokeComponents = jokesData.map((joke) => (
    <Jokes
      key={joke.id}
      question={joke.question}
      punchLine={joke.punchLine}
      author={joke.author}
    />
  ));
  return (
    <div>
      <h1>Time for some Jokes!!!</h1>
      <ol>{jokeComponents}</ol>
    </div>
  );
};
export default App;
