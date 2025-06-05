import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
  const [nextind, setNextIndex] = useState(0);
  const [showmore, setShowMore] = useState(false);

  let lenList = sculptureList.length;

  function handleNext() {
    nextind > lenList - 2
      ? setNextIndex(lenList - 1)
      : setNextIndex(nextind + 1);
  }
  function handlePrev() {
    nextind < 1 ? setNextIndex(0) : setNextIndex(nextind - 1);
  }
  function handleShowMore() {
    setShowMore(!showmore);
  }

  let sculpture = sculptureList[nextind];

  return (
    <>
      <button onClick={handlePrev}>Prev</button>&nbsp;
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({nextind + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowMore}>
        {showmore ? 'Hide' : 'Show'} details
      </button>
      <br />
      {showmore && <p>{sculpture.description}</p>}
      <br />
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
