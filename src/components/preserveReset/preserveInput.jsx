import { useState } from 'react';

export default function PreserveInput() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      <p>{showHint && <i>Hint: Your favorite city?</i>}</p>
      <Form />
      <button
        onClick={() => {
          {
            showHint ? setShowHint(false) : setShowHint(true);
          }
        }}
      >
        {showHint ? 'Hide ' : 'Show '} hint
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
