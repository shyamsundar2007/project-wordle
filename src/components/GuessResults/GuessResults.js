import React from "react";

import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results = [], answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        if (index >= results.length) {
          return <Guess key={index} answer={answer}></Guess>;
        }
        return (
          <Guess word={results[index]} key={index} answer={answer}></Guess>
        );
      })}
    </div>
  );
}

export default GuessResults;
