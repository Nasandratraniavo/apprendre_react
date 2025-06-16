import { useState } from 'react';
import { initialLetters } from './data.jsx';
import Letter from './letters.jsx';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState([]);

  const selectedCount = selectedId.length;

  function handleToggle(toggledId) {
    if (selectedId.includes(toggledId)) {
      setSelectedId(selectedId.filter((id) => id !== toggledId));
    } else {
      setSelectedId([...selectedId, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {initialLetters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedId.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
