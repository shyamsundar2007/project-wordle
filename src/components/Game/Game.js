import React from "react";

import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([]);
  function handleGuessSubmit(guess) {
    setResults((results) => [...results, guess]);
  }
  const didWin = results[results.length - 1] === answer;
  const didLose = results.length >= NUM_OF_GUESSES_ALLOWED && !didWin;
  const isGameOver = didWin || didLose;

  return (
    <>
      <GuessResults results={results} answer={answer}></GuessResults>
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        isGameOver={isGameOver}
      ></GuessInput>
      {didWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {results.length} guesses</strong>.
          </p>
        </div>
      )}
      {didLose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
