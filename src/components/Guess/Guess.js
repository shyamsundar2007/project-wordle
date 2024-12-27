import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const guessResult = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        const resultClass = `cell ${
          guessResult ? guessResult[index].status : ""
        }`;
        return (
          <span className={resultClass} key={index}>
            {word ? word[index] : " "}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
