import { useState } from 'react';

export default function Form() {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }

  function handleClickReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleChangeFirstName}
      />{' '}
      &nbsp;
      <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={handleChangeLastName}
      />
      <h3>
        Hi, {firstName} &nbsp;
        {lastName}
      </h3>
      <button onClick={handleClickReset}>Reset</button>
    </form>
  );
}
