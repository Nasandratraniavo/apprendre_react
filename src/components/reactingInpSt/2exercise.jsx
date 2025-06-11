import { useState } from 'react';

export default function EditProfile() {
  const [show, setShow] = useState(true);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  function handleSubmit(e) {
    e.preventDefault();
    const button = document.getElementById('idSubmit');
    let buttonText = button.textContent;

    if (buttonText.toLowerCase() === 'edit profile') {
      button.textContent = 'Save Profile';
      setShow(false);
    } else {
      button.textContent = 'Edit Profile';
      setShow(true);
    }
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name: <b hidden={!show}>{firstName}</b>&nbsp;&nbsp;
        <input
          hidden={show}
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <br />
      <label>
        Last name: <b hidden={!show}>{lastName}</b>&nbsp;&nbsp;
        <input hidden={show} value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <br />
      <button id="idSubmit" type="submit">
        Edit Profile
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
