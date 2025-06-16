import { useState } from 'react';

export default function SyncedInputs() {
  const [textValue, setTextValue] = useState('');

  function handleChange(e) {
    setTextValue(e.target.value);
  }

  return (
    <>
      <Input label="First input" value={textValue} onChange={handleChange} />
      <Input label="Second input" value={textValue} onChange={handleChange} />
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      {'   '}
      <input value={value} onChange={onChange} />
    </label>
  );
}
