import React from "react";
import { useState } from "react";

function GuessInput({ handleGuessSubmit, isGameOver }) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleGuessSubmit(input);
    console.log({ input });
    setInput("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;
