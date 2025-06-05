import { people } from './components/rend_list/scientists/data.jsx';
import { getImageUrl } from './components/rend_list/scientists/utils.jsx';

export default function List() {
  const chemists = people.filter((person) => person.profession == 'chemist');
  const physicists = people.filter(
    (person) => person.profession == 'physicist'
  );
  const listChemists = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const listPhysicists = physicists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listChemists}</ul>
      <ul>{listPhysicists}</ul>
    </article>
  );
}
