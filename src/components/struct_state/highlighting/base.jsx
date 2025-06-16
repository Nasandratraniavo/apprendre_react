import { useState } from 'react';
import { initialLetters } from './data.jsx';
import Letter from './letter.jsx';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedID, setHighlightedID] = useState(null);

  function handleHover(letterID) {
    setHighlightedID(letterID);
  }

  function handleStar(starredID) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredID) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedID}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
