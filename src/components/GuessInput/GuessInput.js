import React, { useState } from "react";

function GuessInput() {
  const [text, setText] = useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Guess: " + text);
          setText("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Z]{5}"
          title="Please enter exactly 5 uppercase letters."
          required
          value={text}
          onChange={(event) => {
            setText(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
