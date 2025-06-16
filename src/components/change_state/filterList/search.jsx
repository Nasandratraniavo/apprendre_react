import { useState } from 'react';
import { foods, filterItems } from './data.jsx';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar value={query} onChange={handleChange} />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <label>
      Search: <input value={value} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
