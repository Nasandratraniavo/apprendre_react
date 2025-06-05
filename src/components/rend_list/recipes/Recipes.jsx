import { Fragment } from 'react';
import { recipes } from './data';

export default function Recipe() {
  const viewRec = recipes.map((allrecipes) => (
    <Fragment key={allrecipes.id}>
      <h2>{allrecipes.name}</h2>
      <ul>
        {allrecipes.ingredients.map((eachIngr) => (
          <li>{eachIngr}</li>
        ))}
      </ul>
    </Fragment>
  ));
  return <div>{viewRec}</div>;
}
