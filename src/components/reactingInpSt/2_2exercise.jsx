import { useState } from 'react';

export default function EditProfile() {
  const [isShow, setIsShow] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsShow(true);
      }}
    >
      <label>
        First name:{' '}
        {isShow ? (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <br />
      <br />
      <label>
        Last name:{' '}
        {isShow ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <br />
      <br />
      <button id="idSubmit" type="submit">
        {isShow ? 'Save' : 'Edit'} Profile
      </button>
      <p>
        <i>
          Hello, {firstName}&nbsp;
          {lastName}!
        </i>
      </p>
    </form>
  );
}
