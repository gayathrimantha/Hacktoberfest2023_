import React, { useState } from 'react';

const GuessNumberGame = () => {
  const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess === '') {
      setMessage('Please enter a valid number.');
      return;
    }

    const parsedGuess = parseInt(guess, 10);

    if (parsedGuess === secretNumber) {
      setMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts + 1} attempts.`);
      setSecretNumber(generateSecretNumber());
      setGuess('');
      setAttempts(0);
    } else if (parsedGuess < secretNumber) {
      setMessage('Try a higher number.');
      setAttempts(attempts + 1);
    } else {
      setMessage('Try a lower number.');
      setAttempts(attempts + 1);
    }
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p>Guess a number between 1 and 100.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          min="1"
          max="100"
        />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuessNumberGame;
