import { useState } from 'react';

export default function Swapping() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return (
    <>
      {reverse ? (
        <div>
          <Field key="lastName" label="Last name" />
          <Field key="firstName" label="First name" />
        </div>
      ) : (
        <div>
          <Field key="firstName" label="First name" />
          <Field key="lastName" label="Last name" />
        </div>
      )}
      {checkbox}
    </>
  );
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
