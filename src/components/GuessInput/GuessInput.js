import React from "react";

function GuessInput({ onGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({guess});
    setGuess("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[A-Z]{5}"
          title="Please enter a 5-letter word."
          type="text"
          id="guess-input"
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
